import fs from 'fs'
import path from 'path'
import { QUEUE_KEY, STORAGE_INIT } from '../constants'
import {
  FULL_PATH_DEV_DEFAULT_IMAGES,
  FULL_PATH_IMAGES_DIR,
  FULL_PATH_PROD_DEFAULT_IMAGES,
  FULL_PATH_STORAGE_FILE
} from '../constants/paths'

const isDev = process.env.NODE_ENV === 'development'
const defaultImagesDir = isDev ? FULL_PATH_DEV_DEFAULT_IMAGES : FULL_PATH_PROD_DEFAULT_IMAGES

export const initializeApplicationFiles = (): void => {
  const imageUrls = initializeImages()
  initializeStorage(imageUrls)
}

export const initializeImages = (): string[] | null => {
  if (!fs.existsSync(FULL_PATH_IMAGES_DIR)) {
    fs.mkdirSync(FULL_PATH_IMAGES_DIR, { recursive: true })

    const defaultImages = fs
      .readdirSync(defaultImagesDir)
      .filter((file) => /^[1-5]\.(jpg|jpeg|png|gif)$/i.test(file))

    const imageUrls: string[] = defaultImages.map((image) => {
      const fileName = `${Date.now()}-${image}`
      const source = path.join(defaultImagesDir, image)
      const destination = path.join(FULL_PATH_IMAGES_DIR, fileName)
      fs.copyFileSync(source, destination)

      return fileName
    })
    console.log('Default images copied successfully.')
    return imageUrls
  } else {
    console.log('Images directory already exists.')
    return null
  }
}

export const initializeStorage = (imageUrls: string[] | null): void => {
  if (!fs.existsSync(FULL_PATH_STORAGE_FILE)) {
    const startUpOfStorage = STORAGE_INIT
    if (imageUrls) {
      startUpOfStorage[QUEUE_KEY] = imageUrls
    }
    fs.writeFileSync(FULL_PATH_STORAGE_FILE, JSON.stringify(startUpOfStorage, null, 2), 'utf-8')
    console.log('default storage created.')
  } else {
    console.log('default storage exists.')
  }
}
