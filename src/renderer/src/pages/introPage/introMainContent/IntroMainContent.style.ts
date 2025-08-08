import { createUseStyles } from 'react-jss'
import { spacing, typography } from '@styles/variables'
import { colors } from '@styles/colors'

export const useStyles = createUseStyles({
  mainContent: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'column',
    gap: 24
  },
  upperMainContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  },
  imgWrapper: {
    padding: '0 53px'
  },
  imgContainer: {
    width: 325,
    height: 203,
    borderRadius: 8
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  upperText: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4
  },
  text: {
    height: 20,
    fontFamily: typography.fonts.gilroyMedium,
    fontSize: typography.fontSizes.base,
    fontWeight: 400,
    color: '#000000'
  },
  link: {
    color: colors.mainText,
    textDecoration: 'none'
  },
  mainContentDown: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  },
  inputAndBtn: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  },
  input: {
    border: '1px solid #CBCBCB',
    padding: spacing.paddingMain,
    borderRadius: spacing.borderRadiusMain,
    boxSizing: 'border-box',
    height: 40,
    color: '#616161',
    fontFamily: typography.fonts.gilroyMedium,
    fontSize: typography.fontSizes.md,
    outline: 'none',
    '&::placeholder': {
      color: '#BFBFBF'
    },
    '&:hover': {
      color: '#616161'
    },
    '&:hover::placeholder': {
      color: '#616161'
    },
    '&:active': {
      color: '#616161'
    },
    '&:typing': {
      color: '#616161'
    }
  },
  inputErr: {
    border: '1px solid #9D0007'
  },
  errorText: {
    textAlign: 'center',
    marginTop: -12,
    marginBottom: -12,
    color: '#9D0007',
    fontSize: typography.fontSizes.sm,
    fontFamily: typography.fonts.gilroyMedium,
    height: 10
  },
  btn: {
    border: '1px solid #CBCBCB',
    borderRadius: 24,
    boxSizing: 'border-box',
    height: 40,
    color: '#C209C1',
    backgroundColor: '#FFFFFF',
    fontFamily: typography.fonts.gilroySemiBold,
    fontSize: typography.fontSizes.lg,
    '&:hover': {
      backgroundColor: '#EDEDED'
    },
    '&:active': {
      color: '#920792'
    }
  },
  btnDisabled: {
    backgroundColor: '#F5F5F552',
    color: '#CBCBCB'
  },
  learnAbout: {
    color: '#C209C1',
    fontFamily: typography.fonts.gilroySemiBold,
    fontSize: typography.fontSizes.sm,
    height: 14
  }
})

export default useStyles
