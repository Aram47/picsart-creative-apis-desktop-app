import { ActionTypes, Filter, IAction, IFilterDetailed, IState, IToast, PAGES } from './types'

export const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case ActionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload as boolean
      }
    case ActionTypes.SET_LOAD_MAIN_CONTENT:
      return {
        ...state,
        loadMainContent: action.payload as boolean
      }
    case ActionTypes.SET_IMAGE:
      return {
        ...state,
        selectedImage: action.payload as string
      }
    case ActionTypes.SET_PAGE:
      return {
        ...state,
        selectedPage: action.payload as PAGES
      }
    case ActionTypes.ADD_BACKGROUND_FILTER:
      return {
        ...state,
        backgroundFilters: ((): Filter[] => {
          const filtersCopy = state.backgroundFilters.map((filter) => ({ ...filter }))

          const existingFilterIndex = filtersCopy.findIndex(
            (filter) => filter.name === (action.payload as Filter).name
          )

          if (existingFilterIndex !== -1) {
            filtersCopy[existingFilterIndex] = { ...(action.payload as Filter) }
          } else {
            filtersCopy.push({ ...(action.payload as Filter) })
          }

          return filtersCopy
        })()
      }
    case ActionTypes.ADD_ENHANCE_FILTER:
      return {
        ...state,
        enhanceFilters: ((): Filter[] => {
          const filtersCopy = state.enhanceFilters.map((filter) => ({ ...filter }))

          const existingFilterIndex = filtersCopy.findIndex(
            (filter) => filter.name === (action.payload as Filter).name
          )

          if (existingFilterIndex !== -1) {
            filtersCopy[existingFilterIndex] = { ...(action.payload as Filter) }
          } else {
            filtersCopy.push({ ...(action.payload as Filter) })
          }

          return filtersCopy
        })()
      }
    case ActionTypes.SET_IMAGE_PROCESSING:
      return {
        ...state,
        imgProcessingLoading: action.payload as boolean
      }
    case ActionTypes.SET_UPDATE_BALANCE:
      return {
        ...state,
        updateBalance: action.payload as boolean
      }
    case ActionTypes.REMOVE_BACKGROUND_FILTER:
      return {
        ...state,
        backgroundFilters: state.backgroundFilters.filter(
          (filter) => filter.name !== action.payload
        )
      }
    case ActionTypes.REMOVE_ENHANCE_FILTER:
      return {
        ...state,
        enhanceFilters: state.enhanceFilters.filter((filter) => filter.name !== action.payload)
      }
    case ActionTypes.SET_TOAST:
      return {
        ...state,
        toast: action.payload as IToast
      }
    case ActionTypes.SET_SHOW_CHANGE_KEY_MODAL:
      return {
        ...state,
        showChangeKeyModal: action.payload as boolean
      }
    case ActionTypes.SET_FILTER_DETAILED:
      return {
        ...state,
        filterDetailed: action.payload as IFilterDetailed
      }
    case ActionTypes.SET_SHOW_BIG_COLOR_PALETTE:
      return {
        ...state,
        showBigColorPalette: action.payload as boolean
      }
    case ActionTypes.REMOVE_ALL_FILTERS:
      return {
        ...state,
        filterDetailed: null,
        enhanceFilters: [],
        backgroundFilters: []
      }
    default:
      return state
  }
}
