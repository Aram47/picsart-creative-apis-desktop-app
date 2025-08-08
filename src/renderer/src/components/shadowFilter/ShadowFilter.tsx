import { useContext, useState } from 'react'
import { GlobalContext, IFilterDetailed, setFilterDetailed } from '@app/index'
import { MAKE_TRANSPARENT_ACTION_NAME } from '@constants/index'
import useStyles from './shadowFilter.style'
import PlusIcon from '@assets/icons/plus.svg'

const ShadowFilter: React.FC = () => {
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
      dispatch(setFilterDetailed(IFilterDetailed.SHADOW))
    }
    setIsSelected((prev) => !prev)
  }
  return (
    <div
      onClick={handleClick}
      className={`${classes.shadowFilter}  ${isSelected ? classes.selected : ''}  ${disabled ? classes.disabled : ''}`}
    >
      <div className={classes.shadowFilterContainer}>
        <span className={classes.text}>Shadow</span>
        <img src={PlusIcon} alt="Uploaded preview" className={classes.img} />
      </div>
    </div>
  )
}

export default ShadowFilter
