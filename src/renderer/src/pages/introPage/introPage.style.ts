import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  Intro: {
    padding: '16px 24px 20px',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    boxSizing: 'border-box'
  },
  IntroContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
    boxSizing: 'border-box'
  }
})

export default useStyles
