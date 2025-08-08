import { typography } from '@renderer/styles/variables'
import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  shadowFilter: {
    cursor: 'pointer',
    width: 155,
    height: 32,
    borderRadius: 24,
    border: '2px solid #E0E0E0',
    display: 'flex',
    boxSizing: 'border-box',
    flexShrink: 0,
    '&:hover': {
      background: '#F2F2F2'
    }
  },
  shadowFilterContainer: {
    display: 'flex',
    gap: 8,
    width: '100%',
    padding: '0 16px',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center'
  },
  img: {
    width: 12,
    height: 12
  },
  text: {
    fontSize: typography.fontSizes.md,
    color: '#000000',
    fontWeight: 400,
    fontFamily: typography.fonts.gilroySemiBold
  },
  disabled: {
    opacity: 0.33
  },
  selected: {
    background: '#F2F2F2'
  }
})

export default useStyles
