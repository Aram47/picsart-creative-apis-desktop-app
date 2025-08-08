import { createUseStyles } from 'react-jss'
import { typography } from '@styles/variables'
import { colors } from '@styles/colors'

export const useStyles = createUseStyles({
  footer: {
    boxSizing: 'border-box',
    height: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  imageContainer: {
    width: '25%'
  },
  img: {
    width: 38,
    height: 10
  },
  linksContainer: {
    display: 'flex',
    gap: 16
  },
  link: {
    fontFamily: typography.fonts.gilroySemiBold,
    fontSize: typography.fontSizes.xs,
    color: colors.footerText,
    textDecoration: 'none'
  }
})

export default useStyles
