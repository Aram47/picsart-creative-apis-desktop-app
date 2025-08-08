import { app } from 'electron'
import path from 'path'

const isDev = process.env.NODE_ENV === 'development'
let basePath = isDev ? __dirname : app.getAppPath()
basePath = isDev ? path.join(basePath, '..', '..') : basePath
const iconPath = path.join(basePath, 'resources', 'icons')

export const getPlatformIcon = (): string => {
  const platform = process.platform
  if (platform === 'win32') {
    return iconPath + '/app-icon.ico'
  } else if (platform === 'darwin') {
    return iconPath + '/app-icon.icns'
  } else {
    return iconPath + '/app-icon.png'
  }
}
