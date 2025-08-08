import { createUseStyles } from 'react-jss'
import { typography, spacing } from './variables'
import { colors } from './colors'

export const useGlobalStyles = createUseStyles({
  '@global': {
    '*': {
      fontWeight: typography.fontWeights.main
    },
    body: {
      margin: 0
    },
    '.root': {
      padding: spacing.paddingMain,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      minHeight: '95vh'
    },
    h1: {
      fontSize: typography.fontSizes.xxl,
      color: colors.h1Text,
      fontFamily: typography.fonts.gilroySemiBold
    },
    h2: {
      fontSize: typography.fontSizes.lg,
      fontFamily: typography.fonts.gilroyMedium,
      lineHeight: '24px',
      color: '#000000'
    },
    h3: {
      fontSize: typography.fontSizes.md,
      fontFamily: typography.fonts.gilroyMedium,
      lineHeight: '20px'
    },
    span: {
      fontSize: typography.fontSizes.base,
      fontFamily: typography.fonts.gilroySemiBold
    },
    '.flex-row': {
      display: 'flex',
      flexDirection: 'row'
    },
    '.flex-col': {
      display: 'flex',
      flexDirection: 'column'
    },
    '.sp-betwen': {
      justifyContent: 'space-between'
    },
    '.sp-around': {
      justifyContent: 'space-around'
    },
    '.g-5': {
      gap: spacing.gap.small
    },
    '.g-10': {
      gap: spacing.gap.medium
    },
    '.g-15': {
      gap: spacing.gap.large
    },
    '.margin-top-minus-100': {
      marginTop: '-100px'
    },
    '.error-text': {
      fontSize: typography.fontSizes.sm,
      color: colors.errorText,
      margin: '-6px 6px'
    },
    '.warning-text': {
      fontSize: typography.fontSizes.sm,
      color: colors.warningText,
      margin: '-6px 6px'
    },
    '.success-text': {
      fontSize: typography.fontSizes.sm,
      color: colors.successText,
      margin: '-6px 6px'
    },
    '.disabled-btn': {
      color: `${colors.btnDisabledText} !important`,
      border: `1px solid ${colors.btnDisabledBorder} !important`,
      background: `${colors.btnDisabledBackground} !important`
    },
    '.disabled-picker': {
      color: `${colors.pickerDisabledText} !important`,
      background: `${colors.pickerDisabledBackground} !important`
    },
    '.disabled-selector': {
      color: `${colors.selectorDisabledText} !important`,
      border: `1px solid ${colors.selectorDisabledBorder} !important`,
      background: `${colors.selectorDisabledBackground} !important`
    },
    '.error-border': {
      border: `1px solid ${colors.errorBorder} !important`
    }
  }
})
