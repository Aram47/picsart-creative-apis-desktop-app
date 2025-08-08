import { colors } from '@renderer/styles/colors'
import { typography } from '@renderer/styles/variables'
import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  shadowFilterDetailed: {
    height: 140,
    display: 'flex'
  },
  shadowFilterDetailedContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column'
  },
  resetAll: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    height: 36,
    boxSizing: 'border-box'
  },
  resetAlltext: {
    cursor: 'pointer',
    boxSizing: 'border-box',
    width: 72,
    padding: '10px 12px',
    fontSize: typography.fontSizes.md,
    color: '#5A00EE',
    fontWeight: 400,
    fontFamily: typography.fonts.gilroySemiBold
  },
  slidersContainer: {
    width: 524,
    border: '2px solid #E0E0E0',
    borderRadius: 12,
    padding: '16px',
    boxSizing: 'border-box',
    display: 'flex',
    gap: 12,
    boxShadow: '0px 0px 10px 0px #00000040'
  },
  slidersContainerWrapper: {
    width: '325px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  shadowFilter: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  clicked: {
    backgroundColor: '#EDEDED',
    color: '#616161',
    transition: 'background-color 0.5s ease'
  },
  inputFilter: {
    height: '18px',
    width: '88%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--border-radius-main)',
    fontSize: 'var(--font-size-md)',
    padding: 'var(--padding-main)',
    transition: 'background-color 0.5s ease'
  },
  icon: {
    width: '20px',
    height: '20px'
  },
  hideContentContainer: {
    paddingLeft: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    boxSizing: 'border-box'
  },
  filterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  property: {
    fontSize: typography.fontSizes.md,
    color: colors.strokePropertyText,
    fontFamily: typography.fonts.gilroySemiBold
  },
  valueContainer: {
    border: '2px solid #E0E0E0',
    padding: '8px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '26px',
    width: '50px',
    boxSizing: 'border-box'
  },
  slider: {
    width: '60%',
    margin: '0 auto',
    textAlign: 'center',
    borderRadius: '100px !important',
    display: 'flex',
    flexDirection: 'column'
  },
  valueText: {
    fontSize: typography.fontSizes.base,
    color: colors.strokePropertyText,
    fontFamily: typography.fonts.gilroySemiBold
  }
  // colorContainer: {
  //   width: 285,
  //   height: 64,
  //   border: '2px solid #E0E0E0',
  //   borderRadius: 12,
  //   backgroundClip: 'padding-box',
  //   outline: 'none',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   gap: 4,
  //   padding: '6px 16px',
  //   boxSizing: 'border-box'
  // },

  // colorContainerText: {
  //   minHeight: 16,
  //   fontSize: typography.fontSizes.md,
  //   color: '#080808',
  //   fontWeight: 400,
  //   fontFamily: typography.fonts.gilroySemiBold
  // },
  // paletteContainer: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   gap: '4px'
  // },
  // colorBox: {
  //   width: '28px',
  //   height: '28px',
  //   border: '2px solid transparent',
  //   borderRadius: '8px',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   cursor: 'pointer',
  //   transition: 'transform 0.3s ease, border-color 0.3s ease',
  //   '&:hover': {
  //     boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)'
  //   }
  // },
  // addBox: {
  //   width: '28px',
  //   height: '28px',
  //   borderRadius: '8px',
  //   boxSizing: 'border-box',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   cursor: 'pointer',
  //   '&:hover': {
  //     boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)' // Hover effect
  //   },
  //   border: '2px dashed #E0E0E0',
  //   color: '#7A7A7A',
  //   fontSize: '18px',
  //   fontWeight: 'bold'
  // },
  // selectedColor: {
  //   maxWidth: '24px',
  //   height: '24px',
  //   border: '2px solid #E0E0E0',
  //   transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease'
  // }
})

export default useStyles
