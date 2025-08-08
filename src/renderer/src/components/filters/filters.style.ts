import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  filters: {
    width: '100%',
    // overflowX: 'scroll',
    // overflowY: 'hidden',
    overflow: 'visible',
    position: 'relative',
    '-ms-overflow-style': 'none',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
      marginTop: 2
    }
  },
  filtersContainer: {
    width: '100%',
    display: 'flex',
    gap: 8
  }
})

export default useStyles
