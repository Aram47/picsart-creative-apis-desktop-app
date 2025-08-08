import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  toastContainer: {
    position: 'absolute',
    zIndex: 1,
    bottom: '30px',
    // width: '24%',
    height: '40px',
    display: 'flex',
    borderRadius: '12px',
    padding: '4px 8px',
    gap: '4px',
    transition: 'visibility 0.3s, opacity 0.3s ease',
    backgroundColor: '#FFFFFF',
    visibility: 'visible',
    animation: '$fadein 0.5s',
    '&$closeToast': {
      animation: '$fadeout 0.5s'
    }
  },
  nestedContainer: {
    display: 'flex',
    gap: '6px',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  iconContainer: {
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContainer: {
    display: 'flex',
    width: '100%',
    textAlign: 'center',
    '& .text': {
      color: '#4C4C4C',
      fontSize: '14px' // Replace $font-size-base with a static value
    }
  },
  closeContainer: {
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  toastContainerSuccess: {
    border: '2px solid #158423 !important'
  },
  toastContainerError: {
    border: '2px solid #D31E2A'
  },
  toastContainerWarning: {
    border: '2px solid #FE9D24'
  },
  closeToast: {
    animation: '$fadeout 0.5s',
    '-webkit-animation': '$fadeout 0.5s'
  },
  '@keyframes fadein': {
    from: { bottom: 0, opacity: 0 },
    to: { bottom: '30px', opacity: 1 }
  },
  '@keyframes fadeout': {
    from: { bottom: '30px', opacity: 1 },
    to: { bottom: 0, opacity: 0 }
  }
})

export default useStyles
