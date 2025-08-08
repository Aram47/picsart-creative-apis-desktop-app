import { Dispatch } from 'react'

export interface IState {
  loading: boolean
  imgProcessingLoading: boolean
  loadMainContent: boolean
  selectedImage: string
  selectedPage: PAGES
  backgroundFilters: Filter[]
  enhanceFilters: Filter[]
  updateBalance: boolean
  toast: IToast | null
  showChangeKeyModal: boolean
  filterDetailed: IFilterDetailed | null
  showBigColorPalette: boolean
}

export enum ActionTypes {
  SET_LOADING,
  SET_LOAD_MAIN_CONTENT,
  SET_IMAGE,
  SET_PAGE,
  ADD_BACKGROUND_FILTER,
  ADD_ENHANCE_FILTER,
  SET_IMAGE_PROCESSING,
  SET_UPDATE_BALANCE,
  REMOVE_BACKGROUND_FILTER,
  REMOVE_ENHANCE_FILTER,
  SET_TOAST,
  SET_SHOW_CHANGE_KEY_MODAL,
  SET_FILTER_DETAILED,
  REMOVE_ALL_FILTERS,
  SET_SHOW_BIG_COLOR_PALETTE
}

export interface IAction {
  type: ActionTypes
  payload: unknown
}

export interface IContextType {
  state: IState
  dispatch: Dispatch<IAction>
}

export enum PAGES {
  REMOVE_BG,
  ENHANCE
}

export interface Filter {
  name: string
  val: string
}

export interface IToast {
  text: string
  type: 'success' | 'error' | 'warning'
  duration?: number
}

export interface ProcessingImagePropsScheme {
  formData: FormData
  url: string
}

export enum IFilterDetailed {
  BACKGROUND_COLOR,
  SHADOW,
  ENHANCE
}
