import { createUseStyles } from 'react-jss'
import { typography } from '@styles/variables'
import { colors } from '@styles/colors'

export const useStyles = createUseStyles({
  header: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    boxSizing: 'border-box',
    height: 44
  },
  title: {
    fontFamily: typography.fonts.gilroyBold,
    fontSize: typography.fontSizes.lg,
    color: '#000000'
  },
  subTitle: {
    fontFamily: typography.fonts.gilroyMedium,
    fontSize: typography.fontSizes.md,
    color: colors.h1Text
  }
})

export default useStyles
