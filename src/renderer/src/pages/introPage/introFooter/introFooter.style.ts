import { createUseStyles } from 'react-jss'
import { typography } from '@styles/variables'
import { colors } from '@styles/colors'

export const useStyles = createUseStyles({
  footer: {
    borderTop: '1px solid #E8E8E8',
    paddingTop: 12,
    boxSizing: 'border-box',
    height: 39
  },
  img: {
    width: 100,
    height: 26
  },
  footerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 26
  },
  link: {
    fontFamily: typography.fonts.gilroySemiBold,
    fontSize: typography.fontSizes.sm,
    color: colors.footerText,
    textDecoration: 'none'
  }
})

export default useStyles
