import { createUseStyles } from 'react-jss'
import { spacing } from '@styles/variables'

export const useUploadBoxStyles = createUseStyles({
  uploadBox: {
    width: '100%',
    height: '278px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px dashed #b0b0b0',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'border-color 0.3s ease'
  },
  uploadLabel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#808080',
    fontSize: '16px',
    textAlign: 'center',
    cursor: 'pointer'
  },
  fileInput: {
    display: 'none'
  },
  uploadIcon: {
    fontSize: '24px',
    marginTop: '10px',
    color: '#808080',
    transition: 'color 0.3s ease'
  },
  filePreview: {
    width: '100%',
    borderRadius: spacing.borderRadiusMain,
    objectFit: 'cover'
  }
})
