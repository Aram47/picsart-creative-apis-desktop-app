import { BrowserWindow, contextBridge, ipcRenderer, clipboard } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import path from 'path'

import {
  ADD_IMAGE,
  DELETE_KEY,
  GET_IMAGES,
  GET_KEY,
  IMAGE_ADDED,
  LOAD_STATE,
  SAVE_KEY,
  SAVE_STATE
} from '../constants/index'

interface PreloadApiScheme {
  getImages: () => Promise<string[]>
  addImage: (imageData: string, fileName: string) => Promise<string>
  saveKey: (keyName: string, keyValue: string) => Promise<void>
  getKey: (keyName: string) => Promise<string | null>
  deleteKey: (keyName: string) => Promise<void>
  saveState: (state: Record<string, number>) => Promise<void>
  loadState: () => Promise<Record<string, number>>
  handlePreviewApi: (fileData: { url: string }) => void
  onImageAdded: (cb: () => void) => void
  offImageAdded: (cb: () => void) => void
  readClipboard: () => string
  writeClipboard: (text: string) => void
}

const api: PreloadApiScheme = {
  getImages: () => ipcRenderer.invoke(GET_IMAGES),
  addImage: (imageData, fileName) => ipcRenderer.invoke(ADD_IMAGE, imageData, fileName),
  saveKey: (keyName, keyValue) => ipcRenderer.invoke(SAVE_KEY, keyName, keyValue),
  getKey: (keyName) => ipcRenderer.invoke(GET_KEY, keyName),
  deleteKey: (keyName) => ipcRenderer.invoke(DELETE_KEY, keyName),
  saveState: (state) => ipcRenderer.invoke(SAVE_STATE, state),
  loadState: () => ipcRenderer.invoke(LOAD_STATE),
  onImageAdded: (callback) => ipcRenderer.on(IMAGE_ADDED, callback),
  offImageAdded: (callback) => ipcRenderer.removeListener(IMAGE_ADDED, callback),

  handlePreviewApi: (fileData: { url: string }): void => {
    const previewWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        contextIsolation: true,
        nodeIntegration: false
      }
    })
    previewWindow.loadURL(fileData.url)
  },

  readClipboard: () => clipboard.readText(),
  writeClipboard: (text: string) => clipboard.writeText(text)
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
