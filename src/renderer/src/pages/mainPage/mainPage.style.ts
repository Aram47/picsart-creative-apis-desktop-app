import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  main: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    boxSizing: 'border-box'
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box'
  }
})

export default useStyles
