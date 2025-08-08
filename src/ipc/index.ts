import { setupImagesIpcHandlers } from './images'
import { setupSecureStorageIpcHandlers } from './secureSotrage'
import { setupStateIpcHandlers } from './state'

export const setupIpcHandlers = (): void => {
  setupImagesIpcHandlers()
  setupSecureStorageIpcHandlers()
  setupStateIpcHandlers()
}
