// IPC Channels
export const GET_IMAGES = 'get-images' as const
export const ADD_IMAGE = 'add-images' as const
export const IMAGE_ADDED = 'image-added' as const

// storage managment
export const SAVE_KEY = 'secure-storage:save-key' as const
export const GET_KEY = 'secure-storage:get-key' as const
export const DELETE_KEY = 'secure-storage:delete-key' as const

// state
export const SAVE_STATE = 'state-storage:save-state' as const
export const LOAD_STATE = 'state-storage:load-state' as const

export default {
  GET_IMAGES,
  ADD_IMAGE,
  SAVE_KEY,
  GET_KEY,
  DELETE_KEY,
  SAVE_STATE,
  LOAD_STATE
}
