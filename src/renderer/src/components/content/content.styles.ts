import { createUseStyles } from 'react-jss'

interface props {
  height: number
}

export const useStyles = createUseStyles({
  content: {
    paddingTop: 19,
    maxWidth: 524
  },
  contentContainer: {
    overflow: 'visible',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 15.5,
    boxSizing: 'border-box'
  },
  imgWrapper: {
    boxSizing: 'border-box',
    width: 524,
    height: (p: props) => p.height
  },
  img: {
    borderRadius: 12,
    width: '100%',
    height: '100%',
    objectFit: 'scale-down'
  },
  filtersBlockContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }
})
