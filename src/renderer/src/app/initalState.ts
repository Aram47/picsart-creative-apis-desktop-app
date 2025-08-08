import { IState, PAGES } from './types'

export const InitialState: IState = {
  loading: true,
  imgProcessingLoading: false,
  loadMainContent: false,
  selectedImage: '',
  selectedPage: PAGES.REMOVE_BG,
  backgroundFilters: [],
  enhanceFilters: [],
  updateBalance: false,
  toast: null,
  showChangeKeyModal: false,
  filterDetailed: null,
  showBigColorPalette: false,
}
