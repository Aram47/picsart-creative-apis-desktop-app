import fs from 'fs'
import { ipcMain } from 'electron'
import path from 'path'
import {
  ADD_IMAGE,
  GET_IMAGES,
  IMAGE_ADDED,
  INDEX_KEY,
  MAX_QUEUE_SIZE,
  QUEUE_KEY
} from '../constants'
import { loadState, saveState } from './state'
import { mainWindow } from '../main'
import { FULL_PATH_IMAGES_DIR } from '../constants/paths'

export const setupImagesIpcHandlers = (): void => {
  ipcMain.handle(GET_IMAGES, async () => {
    return await getImages()
  })

  ipcMain.handle(ADD_IMAGE, async (_, base64Data, fileName: string) => {
    return await addImage(base64Data, fileName)
  })
}

const getImages = async (): Promise<string[] | Error> => {
  try {
    const state = loadState()
    if (state && Array.isArray(state.queue) && state.queue.length) {
      return state.queue.map(
        (file) => `file://${path.join(FULL_PATH_IMAGES_DIR, file).replace(/\\/g, '/')}`
      )
    }
    return []
  } catch (error) {
    console.error('Error reading images directory:', error)
    throw error
  }
}

const addImage = async (imageData: string, fileName: string): Promise<void> => {
  const state = loadState()!
  const prevIndex = state.index as number
  const prevImgPath = path.join(FULL_PATH_IMAGES_DIR, state[QUEUE_KEY][prevIndex] as string)

  const currentIndex =
    prevIndex + 1 == MAX_QUEUE_SIZE ? 0 : Math.floor(prevIndex % MAX_QUEUE_SIZE) + 1
  const newFileName = `${Date.now()}-${currentIndex.toString()}${path.extname(fileName)}`
  const base64Data = imageData.replace(/^data:image\/\w+;base64,/, '')
  const buffer = Buffer.from(base64Data, 'base64')
  try {
    fs.unlinkSync(prevImgPath)

    const filePath = path.join(FULL_PATH_IMAGES_DIR, newFileName)
    try {
      fs.writeFileSync(filePath, buffer as NodeJS.ArrayBufferView)
      console.log(`Image successfully saved at ${filePath}`)

      const newQueue = state[QUEUE_KEY]
      newQueue[prevIndex] = newFileName

      saveState({ [INDEX_KEY]: currentIndex, [QUEUE_KEY]: newQueue })
      if (mainWindow) {
        mainWindow.webContents.send(IMAGE_ADDED)
      } else {
        console.error('No main window available to send IMAGE_ADDED event.')
      }
    } catch (error) {
      console.error('Error saving image:', error)
      throw error
    }
  } catch (error) {
    console.error('Error saving image:', error)
    throw error
  }
}
