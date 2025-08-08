import { useStyles } from './loadingSpinner.styles'
import logo from '@assets/icons/spining-logo.svg'

const LoadingSpinner: React.FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.loadingSpinnerContainer}>
      <div className={classes.loadingSpinner}></div>
      <div className={classes.iconContainer}>
        <img src={logo} alt="Loading Icon" />
      </div>
    </div>
  )
}

export default LoadingSpinner
