import { createUseStyles } from 'react-jss'
import { spacing } from '@styles/variables'

export const useColorPickerStyles = createUseStyles({
  colorPickerContainer: {
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',

    '& .react-colorful': {
      width: '100%',
      height: '135px',

      '& .react-colorful__hue': {
        display: 'none'
      },

      '& .react-colorful__saturation': {
        borderRadius: `${spacing.borderRadiusMain} !important`
      }
    }
  },
  sliderContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconContainer: {
    // border: '1px solid #e0e0e0',
    borderRadius: '4px',
    width: '28px',
    height: '28px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: '16',
    height: '16px'
  },
  colorSlider: {
    padding: '16px 11px',
    width: '158px',

    '& .w-color-alpha': {
      height: '4px !important'
    },

    '& .w-color-alpha > *': {
      borderRadius: '100px !important'
    },

    '& .w-color-alpha-fill': {
      borderRadius: '100px !important',
      transform: 'translate(-9px, -9px) !important',
      width: '24px !important',
      height: '24px !important'
    }
  }
})
