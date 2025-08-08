import { useContext } from 'react'
import useStyles from './filtersBlock.style'
import { Filters } from '@components/index'
import { GlobalContext, PAGES } from '@app/index'

const FiltersBlock: React.FC = () => {
  const {
    state: { selectedPage }
  } = useContext(GlobalContext)!
  const overflowX = selectedPage == PAGES.REMOVE_BG ? 'auto' : 'visible'
  const classes = useStyles({ overflowX })

  return (
    <div className={classes.filtersBlock}>
      <div className={classes.filtersBlockContainer}>
        <Filters />
      </div>
    </div>
  )
}

export default FiltersBlock
