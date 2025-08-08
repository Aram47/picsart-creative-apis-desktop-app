import { app, shell, BrowserWindow, ipcMain, Menu } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import { setupIpcHandlers } from '../ipc'
import { initializeApplicationFiles } from '../utils/bootstrap'
import { getPlatformIcon } from '../utils/platform'
import {
  GENAI_TERMS,
  HELP_CENTER,
  PICSART_ENTERPRISE_TERMS,
  PRICING,
  PRIVACY_POLICY,
  SUPPORT_REQUEST,
  TRUST_CENTER
} from '../constants'

export let mainWindow: BrowserWindow | null = null

function createWindow(): void {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    autoHideMenuBar: false,
    icon: getPlatformIcon(),
    useContentSize: true,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      webSecurity: false,
      nodeIntegration: false,
      contextIsolation: true
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow!.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

/////////////////////////
const createPreviewWindow = (url: string): void => {
  const previewWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true
      // Add other settings as necessary
    }
  })

  previewWindow.loadURL(url) // Load the URL directly in the new window
}
//////////////////////

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  const APP_NAME = app.name.charAt(0).toUpperCase() + app.name.slice(1)
  app.name = APP_NAME

  const isMac = process.platform === 'darwin'

  const menuTemplate = [
    ...(isMac
      ? [
          {
            label: app.name,
            submenu: [
              { role: 'copy' },
              { role: 'paste' },
              { role: 'undo' },
              { role: 'redo' },
              { role: 'cut' },
              { role: 'selectAll' },
              { role: 'about' },
              { type: 'separator' },
              { role: 'services' },
              { type: 'separator' },
              { role: 'hide' },
              { role: 'hideOthers' },
              { role: 'unhide' },
              { type: 'separator' },
              { role: 'quit' }
            ]
          }
        ]
      : []),
    {
      label: 'File',
      submenu: [isMac ? { role: 'close' } : { role: 'quit' }]
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' }
      ]
    },
    {
      label: 'Window',
      submenu: [
        { role: 'minimize' },
        ...(isMac
          ? [{ type: 'separator' }, { role: 'front' }, { type: 'separator' }, { role: 'window' }]
          : [{ role: 'close' }])
      ]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Support Request',
          click: (): Promise<void> => shell.openExternal(SUPPORT_REQUEST)
        },
        { type: 'separator' },
        {
          label: 'Picsart Enterprise Terms',
          click: (): Promise<void> => shell.openExternal(PICSART_ENTERPRISE_TERMS)
        },
        {
          label: 'GenAI Terms',
          click: (): Promise<void> => shell.openExternal(GENAI_TERMS)
        },
        {
          label: 'Privacy Policy',
          click: (): Promise<void> => shell.openExternal(PRIVACY_POLICY)
        },
        {
          label: 'Trust Center',
          click: (): Promise<void> => shell.openExternal(TRUST_CENTER)
        },
        {
          label: 'Help Center',
          click: (): Promise<void> => shell.openExternal(HELP_CENTER)
        },
        {
          label: 'Pricing',
          click: (): Promise<void> => shell.openExternal(PRICING)
        }
      ]
    }
  ]

  const menu = Menu.buildFromTemplate(menuTemplate)
  Menu.setApplicationMenu(menu)

  if (process.platform === 'darwin') {
    // Set dock icon for macOS
    // app.dock.setIcon(join(__dirname, '../../resources/icons/icon.icns'))
  }

  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  ipcMain.on('ping', () => console.log('pong'))

  ///////////////////////////
  ipcMain.on('preview-file', (_, fileData) => {
    createPreviewWindow(fileData.url) // Call the function to create a preview window
  })
  //////////////////////////

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  setupIpcHandlers()
  initializeApplicationFiles()
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
