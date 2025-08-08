import {
  DownloadFilter,
  BackgroundColorFilter,
  MakeTransparentFilter,
  ShadowFilter,
  Selector
} from '@components/index'
import { useContext } from 'react'
import {
  addEnhanceFilter,
  GlobalContext,
  IFilterDetailed,
  PAGES,
  setFilterDetailed
} from '@app/index'
import useStyles from './filters.style'
import { FACTOR_ACTION_NAME, FACTOR_TEXT } from '@constants/enhanceFilters'
import { FACTOR_OPTIONS } from '@constants/enhanceFilters'

const Filters: React.FC = () => {
  const classes = useStyles()
  const {
    state: { selectedImage, selectedPage },
    dispatch
  } = useContext(GlobalContext)!
  return (
    <div className={classes.filters}>
      {selectedPage == PAGES.REMOVE_BG ? (
        <div className={classes.filtersContainer}>
          <DownloadFilter />
          <BackgroundColorFilter />
          <MakeTransparentFilter />
          <ShadowFilter />
        </div>
      ) : (
        <Selector
          actionFn={(val) => dispatch(addEnhanceFilter({ name: FACTOR_ACTION_NAME, val }))}
          openFn={() => dispatch(setFilterDetailed(IFilterDetailed.ENHANCE))}
          closeFn={() => dispatch(setFilterDetailed(null))}
          text={FACTOR_TEXT}
          options={FACTOR_OPTIONS}
          disabled={!selectedImage}
        />
      )}
    </div>
  )
}

export default Filters
