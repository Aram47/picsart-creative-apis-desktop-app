import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  insideRemoveBackgroundContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '14px',
    width: '100%',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
    boxSizing: 'border-box',
    gap: '10px',
    cursor: 'pointer',
    '&:hover': {
      borderColor: '#000',
      boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)'
    },
    '&:focus': {
      borderColor: '#000',
      boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
      outline: 'none'
    }
  },
  text: {
    width: '100%',
    fontSize: '16px',
    fontFamily: '"Gilroy-SemiBold", sans-serif',
    color: '#333',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  icon: {
    width: '10%',
    maxWidth: '17px',
    height: '17px'
  },
  copiedMessage: {
    position: 'absolute',
    top: '-25px',
    background: '#000',
    color: '#fff',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    fontFamily: '"Gilroy-SemiBold", sans-serif',
    animation: '$fadeIn 0.3s ease'
  },
  '@keyframes fadeIn': {
    from: {
      opacity: 0,
      transform: 'translateY(-5px)'
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)'
    }
  }
})

export default useStyles
