import { colors } from '@styles/colors'
import { typography } from '@styles/variables'
import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  filesBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 332
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
  navigationTextActive: {
    color: colors.actionBtnsHovered
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
    cursor: 'pointer',
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
  },
  cantPickAndImages: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  },
  imagesContainer: {
    display: 'grid',
    gridTemplateRows: 'repeat(2, 1fr)',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '8px',
    width: '100%',
    height: 144
  },
  imgWrapper: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    width: 68,
    height: 68
  },
  img: {
    borderRadius: 4,
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  cantPick: {
    color: '#808080',
    fontSize: typography.fontSizes.md,
    fontFamily: typography.fonts.gilroyMedium
  },
  fileInput: {
    display: 'none'
  }
})
