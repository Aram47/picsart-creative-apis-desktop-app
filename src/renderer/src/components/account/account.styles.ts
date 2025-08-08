import { typography } from '@renderer/styles/variables'
import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  account: {
    boxSizing: 'border-box',
    borderTop: '1px solid #E8E8E8',
    width: 220,
    height: 101
  },
  accountContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 9
  },
  title: {
    fontSize: typography.fontSizes.md,
    fontFamily: typography.fonts.gilroySemiBold,
    color: '#000000',
    height: 16,
    paddingBottom: 4
  },
  creditsText: {
    fontSize: typography.fontSizes.sm,
    fontFamily: typography.fonts.gilroySemiBold,
    color: '#4C4C4C',
    margin: 0
  },
  upgradeText: {
    fontSize: typography.fontSizes.sm,
    fontFamily: typography.fonts.gilroyMedium,
    color: '#808080',
    margin: 0
  },
  textadnBtns: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  },
  btns: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12px 6px',
    boxSizing: 'border-box',
    textAlign: 'center',
    width: '110px',
    height: '32px',
    gap: '4px',
    borderRadius: 24,
    backgroundColor: '#158380'
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: typography.fontSizes.sm,
    fontFamily: typography.fonts.gilroySemiBold,
    textDecoration: 'none'
  },
  changeApiKey: {
    fontSize: typography.fontSizes.sm,
    fontFamily: typography.fonts.gilroySemiBold,
    color: '#158380',
    textDecoration: 'none',
    cursor: 'pointer'
  }
})
