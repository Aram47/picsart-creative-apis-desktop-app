import { useContext, useState } from 'react'
import { GlobalContext, IFilterDetailed, setFilterDetailed } from '@app/index'
import { MAKE_TRANSPARENT_ACTION_NAME } from '@constants/index'
import useStyles from './backgroundColorFilter.style'
import GradientIcon from '@assets/icons/gradient.svg'

const BackgroundColorFilter: React.FC = () => {
  const classes = useStyles()
  const [isSelected, setIsSelected] = useState(false)

  const {
    state: { backgroundFilters },
    dispatch
  } = useContext(GlobalContext)!

  const disabled = !!backgroundFilters.find((item) => item.name == MAKE_TRANSPARENT_ACTION_NAME)

  const handleClick = (): void => {
    if (disabled) return

    if (isSelected) {
      dispatch(setFilterDetailed(null))
    } else {
      dispatch(setFilterDetailed(IFilterDetailed.BACKGROUND_COLOR))
    }
    setIsSelected((prev) => !prev)
  }

  return (
    <>
      <div
        onClick={handleClick}
        className={`${classes.backgroundColorFilter}  ${isSelected ? classes.selected : ''}  ${disabled ? classes.disabled : ''}`}
      >
        <div className={classes.backgroundColorFilterContainer}>
          <span className={classes.text}>Backgraund Color</span>
          <img src={GradientIcon} alt="Uploaded preview" className={classes.img} />
        </div>
      </div>
    </>
  )
}

export default BackgroundColorFilter
