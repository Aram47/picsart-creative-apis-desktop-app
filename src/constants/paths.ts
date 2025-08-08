import { app } from 'electron'
import path from 'path'

// Directory Names
export const IMAGES_DIR_NAME = 'images' as const
export const DEFAULT_IMAGES_DIR_NAME = 'images' as const
export const ICONS_DIR_NAME = 'icons' as const
export const RESOURCES_DIR_NAME = 'resources' as const

// Storage
export const STORAGE_NAME = 'state.json' as const

export const USER_DATA_PATH = app.getPath('userData')

// Full Paths
// The Same Prod And Dev
export const FULL_PATH_IMAGES_DIR = path.join(USER_DATA_PATH, IMAGES_DIR_NAME)
export const FULL_PATH_STORAGE_FILE = path.join(USER_DATA_PATH, STORAGE_NAME)

// DEV
export const FULL_PATH_DEV_RESOURCE_DIR = path.join(__dirname, '..', '..', RESOURCES_DIR_NAME)
export const FULL_PATH_DEV_DEFAULT_IMAGES = path.join(FULL_PATH_DEV_RESOURCE_DIR, IMAGES_DIR_NAME)

// PROD
export const APP_PATH = app.getAppPath()
export const FULL_PATH_PROD_RESOURCE_DIR = path.join(APP_PATH, RESOURCES_DIR_NAME)
export const FULL_PATH_PROD_DEFAULT_IMAGES = path.join(FULL_PATH_PROD_RESOURCE_DIR, IMAGES_DIR_NAME)

const defaultExports = {
  IMAGES_DIR_NAME,
  DEFAULT_IMAGES_DIR_NAME,
  ICONS_DIR_NAME,
  RESOURCES_DIR_NAME,
  STORAGE_NAME,
  USER_DATA_PATH,
  FULL_PATH_IMAGES_DIR,
  FULL_PATH_STORAGE_FILE,
  FULL_PATH_DEV_RESOURCE_DIR,
  FULL_PATH_DEV_DEFAULT_IMAGES,
  FULL_PATH_PROD_RESOURCE_DIR,
  FULL_PATH_PROD_DEFAULT_IMAGES
}

export default defaultExports
