import { createUseStyles } from 'react-jss'
import { typography, spacing } from '@styles/variables'
import { colors } from '@styles/colors'

export const useChangeApiKeyModalStyles = createUseStyles({
  changeApiKeyModal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'visibility 0.3s, opacity 0.3s ease',
    zIndex: 1,
    boxShadow: '0.86px 0.86px 3.5px 0px #00000040, 0px 4px 4px 0px #00000040',

    '& input': {
      boxSizing: 'border-box'
    }
  },
  modalContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.gap.large,
    backgroundColor: '#FFFFFF',
    padding: 32,
    borderRadius: spacing.borderRadiusMain
  },
  closeContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: -10,
    marginRight: -10
  },
  closeIcon: {
    cursor: 'pointer'
  },
  inputContainer: {
    maxWidth: '232px',
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.gap.large,
    justifyContent: 'center',
    alignItems: 'center'
  },
  submit: {
    cursor: 'pointer',
    backgroundColor: colors.buyMoreCredits,
    width: '100%',
    maxWidth: '232px',
    height: '48px',
    padding: '0 12px',
    textAlign: 'center',
    border: 'none',
    justifyContent: 'flex-end',
    borderRadius: '24px',
    color: colors.defaultWhite
  },
  keysetInput: {
    height: '44px',
    width: '100%',
    maxWidth: '232px',
    border: `1px solid ${colors.buyMoreCredits}`,
    borderRadius: spacing.borderRadiusMain,
    fontSize: typography.fontSizes.md,
    padding: spacing.paddingMain,
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
    '&:hover': {
      backgroundColor: colors.disabledBackground,
      boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)'
    },
    '&:focus': {
      backgroundColor: colors.disabledBackground,
      boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)',
      outline: 'none'
    }
  },
  pasteButton: {
    cursor: 'pointer',
    backgroundColor: colors.buyMoreCredits,
    color: colors.defaultWhite,
    border: 'none',
    borderRadius: spacing.borderRadiusMain,
    padding: '8px 16px',
    fontSize: typography.fontSizes.sm,
    transition: 'background-color 0.3s ease',
    '&:hover': {
      opacity: 0.8
    }
  },
  getKey: {
    color: colors.buyMoreCredits,
    fontFamily: typography.fonts.gilroyMedium,
    textDecoration: 'none'
  }
})
