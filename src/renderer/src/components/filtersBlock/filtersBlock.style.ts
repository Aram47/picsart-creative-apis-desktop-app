import { createUseStyles } from 'react-jss'

interface props {
  overflowX: 'auto' | 'visible'
}

export const useStyles = createUseStyles({
  filtersBlock: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  filtersBlockContainer: {
    display: 'flex',
    width: '100%',
    overflowX: (p: props) => p.overflowX,
    gap: 16,
    scrollbarWidth: 'none',
    '-ms-overflow-style': 'none',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  }
})

export default useStyles
