import { typography } from '@renderer/styles/variables'
import { createUseStyles } from 'react-jss'

interface props {
  width: number
  height: number
  top: string | number
  bottom: string | number
}

const useStyles = createUseStyles({
  selector: {
    width: (p: props) => p.width,
    height: (p: props) => p.height,
    fontFamily: "'Gilroy', sans-serif",

    color: '#333',
    border: '1px solid #ccc',
    borderRadius: '10px',
    cursor: 'pointer',
    position: 'relative',
    boxSizing: 'border-box',
    padding: '12px 16px',
    display: 'flex',
    '&:focus-within': {
      borderColor: '#888',
      boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.25)'
    },
    '& .label': {
      width: '100%',
      fontSize: typography.fontSizes.sm,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },

    '& .icon': {
      width: '14px',
      height: '14px'
    },
    '& .options': {
      top: (p: props) => p.top,
      bottom: (p: props) => p.bottom,
      marginTop: '5px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '5px 0',
      backgroundColor: '#fff',
      position: 'absolute',
      left: '0',
      width: '100%',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      zIndex: 1
    },
    '& .option': {
      padding: '8px 10px',
      cursor: 'pointer',
      fontSize: typography.fontSizes.sm,
      '&:hover': {
        backgroundColor: '#f0f0f0'
      },
      '&:focus, &:focus-visible': {
        outline: 'none',
        backgroundColor: '#e0e0e0'
      }
    }
  },
  text: {
    fontSize: typography.fontSizes.sm,
    color: '#616161',
    fontFamily: typography.fonts.gilroySemiBold
  },
  disabledSelector: {
    pointerEvents: 'none',
    opacity: 0.5
  }
})

export default useStyles
