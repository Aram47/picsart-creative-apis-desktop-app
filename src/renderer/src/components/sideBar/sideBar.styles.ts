import { colors } from '@styles/colors'
import { typography } from '@styles/variables'
import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  sideBar: {
    paddingBottom: 12,
    boxSizing: 'border-box',
    height: 528,
    paddingTop: 10
  },
  sideBarContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
  },
  filesBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 148
  },
  navigation: {
    width: 220,
    display: 'flex',
    justifyContent: 'space-between'
  },
  navigationText: {
    cursor: 'pointer',
    fontSize: typography.fontSizes.base,
    fontFamily: typography.fonts.gilroySemiBold,
    color: '#C209C1',
    height: 20,
    '&:hover': {
      color: colors.actionBtnsHovered
    }
  },
  uploadBox: {
    width: 220,
    height: 96,
    boxSizing: 'border-box',
    padding: 24,
    border: '1px dashed #9E9E9E',
    borderRadius: 8
  },
  uploadBoxContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8
  },
  uploadIconWrapper: {
    width: 103,
    height: 32,
    border: '1px solid #C209C1',
    padding: '12px 6px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    borderRadius: 24,
    boxSizing: 'border-box'
  },
  addFfileText: {
    color: ' #C209C1',
    fontSize: typography.fontSizes.md,
    fontFamily: typography.fonts.gilroySemiBold
  },
  icon: {
    width: 20,
    height: 20
  },
  uploadText: {
    color: '#808080',
    fontSize: typography.fontSizes.md,
    fontFamily: typography.fonts.gilroyMedium
  }
})
