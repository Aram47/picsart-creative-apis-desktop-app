import { createUseStyles } from 'react-jss'
import { colors } from '@styles/colors'

export const useStyles = createUseStyles({
  loadingSpinnerContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    zIndex: 9999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingSpinner: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    border: '5px solid transparent',
    borderTopColor: colors.mainText,
    animation: '$loading 1s linear infinite',
    position: 'relative'
  },
  iconContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '48px',
    height: '48px',
    zIndex: 2,
    '& img': {
      width: '100%',
      height: 'auto'
    }
  },
  '@keyframes loading': {
    to: {
      transform: 'rotate(360deg)'
    }
  }
})
