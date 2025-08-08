import { colors } from '@renderer/styles/colors'
import { typography } from '@renderer/styles/variables'
import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center'
  },
  text: {
    color: colors.h1Text,
    fontSize: typography.fontSizes.sm,
    fontFamily: typography.fonts.gilroyMedium
  },
  btn: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12px 6px',
    boxSizing: 'border-box',
    textAlign: 'center',
    width: '116px',
    height: '30px',
    gap: '4px',
    borderRadius: 24,
    backgroundColor: '#C209C1',
    '&:hover': {
      background: colors.actionBtnsHoveredBackground,
      color: colors.actionBtnsHovered
    }
  },
  btnText: {
    color: '#FFFFFF',
    padding: '12px 6px',
    fontSize: typography.fontSizes.md,
    fontFamily: typography.fonts.gilroySemiBold,
    '&:hover': {
      background: colors.actionBtnsHoveredBackground,
      color: colors.actionBtnsHovered
    }
  },

  disabled: {
    opacity: 0.32
  }
})
