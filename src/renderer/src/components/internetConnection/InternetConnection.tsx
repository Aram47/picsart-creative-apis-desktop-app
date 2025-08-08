import { useStyles } from './InternetConnection.styles'
import WifiIcon from '@assets/icons/wifi.svg'

const InternetConnection: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.internetConnectionModal}>
      <div className={classes.modalContainer}>
        <div className={classes.iconContainer}>
          <img src={WifiIcon} alt="Wifi icon" className={classes.icon} />
        </div>
        <span className={classes.title}>Connect to Internet</span>
        <span className={classes.subtitle}>Check your Internet connection and retry.</span>
        <button className={classes.retry}>Retry</button>
      </div>
    </div>
  )
}

export default InternetConnection
