import { createUseStyles } from 'react-jss'
import { typography } from '@styles/variables'
import { colors } from '@styles/colors'

export const useStyles = createUseStyles({
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
      color: colors.actionBtnsHovered
    }
  },

  disabled: {
    opacity: 0.32
  }
})
