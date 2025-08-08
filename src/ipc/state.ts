import { ipcMain } from 'electron'
import fs from 'fs'
import { SAVE_STATE, LOAD_STATE } from '../constants'
import { FULL_PATH_STORAGE_FILE } from '../constants/paths'

export const saveState = (newState: Record<string, number>): void => {
  try {
    let existingState: Record<string, number> = {}
    if (fs.existsSync(FULL_PATH_STORAGE_FILE)) {
      const data = fs.readFileSync(FULL_PATH_STORAGE_FILE, 'utf-8')
      existingState = JSON.parse(data)
    }

    const mergedState = { ...existingState, ...newState }

    fs.writeFileSync(FULL_PATH_STORAGE_FILE, JSON.stringify(mergedState, null, 2), 'utf-8')
    console.log('State saved successfully.')
  } catch (error) {
    console.error('Error saving state:', error)
    throw error
  }
}

export const loadState = (): Record<string, number> | null => {
  if (fs.existsSync(FULL_PATH_STORAGE_FILE)) {
    const data = fs.readFileSync(FULL_PATH_STORAGE_FILE, 'utf-8')
    return JSON.parse(data)
  }
  console.warn('State file not found.')
  return null
}

export const setupStateIpcHandlers = (): void => {
  ipcMain.handle(SAVE_STATE, async (_, state: Record<string, number>) => {
    try {
      saveState(state)
      return 'State saved successfully.'
    } catch (error) {
      console.error('Error saving state:', error)
      throw error
    }
  })

  ipcMain.handle(LOAD_STATE, async () => {
    try {
      return loadState()
    } catch (error) {
      console.error('Error loading state:', error)
      throw error
    }
  })
}
