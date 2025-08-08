import { ipcMain } from 'electron'
import keytar from 'keytar'
import { DELETE_KEY, GET_KEY, SAVE_KEY } from '../constants'
import { SERVICE_NAME } from '../constants/secureStorage'

export const saveKey = async (keyName: string, keyValue: string): Promise<void> => {
  try {
    await keytar.setPassword(SERVICE_NAME, keyName, keyValue)
    console.log(`Key ${keyName} saved securely.`)
  } catch (error) {
    console.error('Error saving key to secure storage:', error)
    throw error
  }
}

export const getKey = async (keyName): Promise<null | string> => {
  try {
    const keyValue = await keytar.getPassword(SERVICE_NAME, keyName)
    if (keyValue) {
      console.log(`Key ${keyName} retrieved successfully.`)
      return keyValue
    }
    console.warn(`Key ${keyName} not found.`)
    return null
  } catch (error) {
    console.error('Error retrieving key from secure storage:', error)
    throw error
  }
}

export const deleteKey = async (keyName): Promise<void> => {
  try {
    const success = await keytar.deletePassword(SERVICE_NAME, keyName)
    if (success) {
      console.log(`Key ${keyName} deleted successfully.`)
    } else {
      console.warn(`Key ${keyName} not found.`)
    }
  } catch (error) {
    console.error('Error deleting key from secure storage:', error)
    throw error
  }
}

export const setupSecureStorageIpcHandlers = (): void => {
  ipcMain.handle(SAVE_KEY, async (_, keyName: string, keyValue: string) => {
    await saveKey(keyName, keyValue)
  })

  ipcMain.handle(GET_KEY, async (_, keyName: string) => {
    return await getKey(keyName)
  })

  ipcMain.handle(DELETE_KEY, async (_, keyName: string) => {
    await deleteKey(keyName)
  })
}
