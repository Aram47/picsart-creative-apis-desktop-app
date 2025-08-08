import { ActionTypes, Filter, IAction, IFilterDetailed, IToast, PAGES } from './types'

export const setLoadingAction = (payload: boolean): IAction => {
  return { type: ActionTypes.SET_LOADING, payload }
}

export const setLoadMainContent = (payload: boolean): IAction => {
  return { type: ActionTypes.SET_LOAD_MAIN_CONTENT, payload }
}

export const setSelectedImage = (payload: string): IAction => {
  return { type: ActionTypes.SET_IMAGE, payload }
}

export const setSelectedPage = (payload: PAGES): IAction => {
  return { type: ActionTypes.SET_PAGE, payload }
}

export const addBackgroundFilter = (payload: Filter): IAction => {
  return { type: ActionTypes.ADD_BACKGROUND_FILTER, payload }
}

export const addEnhanceFilter = (payload: Filter): IAction => {
  return { type: ActionTypes.ADD_ENHANCE_FILTER, payload }
}

export const setImageProcessingLoading = (payload: boolean): IAction => {
  return { type: ActionTypes.SET_IMAGE_PROCESSING, payload }
}

export const setUpdateBalance = (payload: boolean): IAction => {
  return { type: ActionTypes.SET_UPDATE_BALANCE, payload }
}

export const removeBackgroundFilter = (payload: string): IAction => {
  return { type: ActionTypes.REMOVE_BACKGROUND_FILTER, payload }
}

export const removeEnhanceFilter = (payload: string): IAction => {
  return { type: ActionTypes.REMOVE_ENHANCE_FILTER, payload }
}

export const setToast = (payload: IToast): IAction => {
  return { type: ActionTypes.SET_TOAST, payload }
}

export const setShowChangeKeyModal = (payload: boolean): IAction => {
  return { type: ActionTypes.SET_SHOW_CHANGE_KEY_MODAL, payload }
}

export const showBigColorPalette = (payload: boolean): IAction => {
  return { type: ActionTypes.SET_SHOW_BIG_COLOR_PALETTE, payload }
}

export const setFilterDetailed = (payload: IFilterDetailed | null): IAction => {
  return { type: ActionTypes.SET_FILTER_DETAILED, payload }
}

export const removeAllFilters = (payload = null): IAction => {
  return { type: ActionTypes.REMOVE_ALL_FILTERS, payload }
}
