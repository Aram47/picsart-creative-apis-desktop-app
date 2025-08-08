export const INDEX_KEY = 'index' as const
export const PAGE_KEY = 'page' as const
export const QUEUE_KEY = 'queue' as const

// Queue properties
export const MAX_QUEUE_SIZE = 5

export const STORAGE_INIT = {
  [INDEX_KEY]: 0,
  [PAGE_KEY]: 0
}

export default {
  INDEX_KEY,
  PAGE_KEY,
  QUEUE_KEY,
  STORAGE_INIT
}
