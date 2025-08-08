import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  customSlider: {
    appearance: 'none',
    WebkitAppearance: 'none',
    width: '100%',
    cursor: 'pointer',
    outline: 'none',
    height: '4px',
    borderRadius: '100px !important',
    '&::-webkit-slider-thumb': {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '16px',
      height: '16px',
      borderRadius: '50%',
      backgroundColor: '#FFFFFF',
      cursor: 'pointer',
      boxShadow: '0px 0px 4px 0px #0000003D'
    },
    '&::-moz-range-thumb': {
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      backgroundColor: '#FFFFFF',
      cursor: 'pointer',
      boxShadow: '0px 0px 4px 0px #0000003D'
    }
  },
  sliderValue: {
    marginTop: '10px',
    fontSize: '14px',
    color: '#333'
  }
})

export default useStyles
