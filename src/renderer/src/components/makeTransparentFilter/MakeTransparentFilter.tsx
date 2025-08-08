import { useContext, useState } from 'react'
import useStyles from './makeTransparentFilter.style'
import MakeTransparentIcon from '@assets/icons/makeTransparent.svg'
import {
  addBackgroundFilter,
  GlobalContext,
  removeAllFilters,
  removeBackgroundFilter
} from '@app/index'
import { MAKE_TRANSPARENT_ACTION_NAME } from '@constants/index'

const MakeTransparentFilter: React.FC = () => {
  const classes = useStyles()
  const [isSelected, setIsSelected] = useState(false)
  const { dispatch } = useContext(GlobalContext)!

  const handleClick = (): void => {
    dispatch(removeAllFilters())
    if (isSelected) {
      dispatch(removeBackgroundFilter(MAKE_TRANSPARENT_ACTION_NAME))
    } else {
      dispatch(addBackgroundFilter({ name: MAKE_TRANSPARENT_ACTION_NAME, val: 'nothing' }))
    }
    setIsSelected((prev) => !prev)
  }

  return (
    <div
      className={`${classes.makeTransparentFilter}  ${isSelected ? classes.selected : ''}`}
      onClick={handleClick}
    >
      <div className={`${classes.makeTransparentFilterContainer}`}>
        <span className={classes.text}>Make Transparent</span>
        <img src={MakeTransparentIcon} alt="Uploaded preview" className={classes.img} />
      </div>
    </div>
  )
}

export default MakeTransparentFilter
