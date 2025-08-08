import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  internetConnectionModal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'visibility 0.3s, opacity 0.3s ease',
    zIndex: 1,
    boxShadow: '0.86px 0.86px 3.5px 0px #00000040, 0px 4px 4px 0px #00000040',
    boxSizing: 'border-box'
  },
  modalContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    backgroundColor: '#FFFFFF',
    padding: '16px 24px',
    borderRadius: '16px'
  },
  iconContainer: {
    display: 'flex',
    width: '56px',
    height: '56px',
    backgroundColor: '#FAEAFA',
    borderRadius: '100px',
    justifySelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: '24px',
    height: '24px'
  },
  title: {
    color: '#F84973',
    fontSize: '16px',
    fontFamily: 'Gilroy, sans-serif',
    fontWeight: 600,
    textAlign: 'center'
  },
  subtitle: {
    color: '#4C4C4C',
    fontSize: '14px',
    fontFamily: 'Gilroy, sans-serif',
    fontWeight: 500,
    textAlign: 'center'
  },
  retry: {
    cursor: 'pointer',
    backgroundColor: '#FFFFFF',
    width: '115px',
    height: '40px',
    padding: '6px 12px',
    textAlign: 'center',
    border: '1px solid #CBCBCB',
    justifyContent: 'flex-end',
    borderRadius: '32px',
    color: '#C209C1',
    '&:hover': {
      border: '1px solid #920792',
      background: '#F3EBF3',
      color: '#920792'
    }
  }
})
