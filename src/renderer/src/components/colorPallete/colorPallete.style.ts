import { typography } from '@renderer/styles/variables'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  colorPallete: {
    position: 'absolute',
    right: 16,
    top: 50,
    gap: 12,
    padding: '12px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: '#FFFFFF',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    borderRadius: 12
  },
  colorContainer: {
    borderRadius: 12,
    backgroundClip: 'padding-box',
    outline: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    boxSizing: 'border-box'
  },

  colorContainerText: {
    minHeight: 16,
    fontSize: typography.fontSizes.md,
    color: '#080808',
    fontWeight: 400,
    fontFamily: typography.fonts.gilroySemiBold
  },
  paletteContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px'
  },
  colorBox: {
    width: '24px',
    height: '24px',
    border: '2px solid transparent',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
    '&:hover': {
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)'
    }
  },
  addBox: {
    width: '24px',
    height: '24px',
    borderRadius: '8px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)' // Hover effect
    },
    border: '2px dashed #E0E0E0',
    color: '#7A7A7A',
    fontSize: '18px',
    fontWeight: 'bold'
  },
  selectedColor: {
    maxWidth: '24px',
    height: '24px',
    border: '2px solid #E0E0E0',
    transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease'
  }
})

export default useStyles
