import {
  PICSART_ENTERPRISE_TERMS,
  HELP_CENTER,
  PRICING,
  PRIVACY_POLICY,
  TRUST_CENTER
} from '@constants/index'
import useStyles from './introFooter.style'
import PicsartIcon from '@assets/icons/picsartIcon.svg'

const IntroFooter: React.FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.footer}>
      <div className={classes.footerContainer}>
        <img src={PicsartIcon} alt="Picsart logo" />
        <a
          className={classes.link}
          href={PICSART_ENTERPRISE_TERMS}
          target="_blank"
          rel="noopener noreferrer"
        >
          Developer Guidelines
        </a>
        <a className={classes.link} href={PRIVACY_POLICY} target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>
        <a className={classes.link} href={TRUST_CENTER} target="_blank" rel="noopener noreferrer">
          Trust Center
        </a>
        <a className={classes.link} href={HELP_CENTER} target="_blank" rel="noopener noreferrer">
          Help Center
        </a>
        <a className={classes.link} href={PRICING} target="_blank" rel="noopener noreferrer">
          Pricing
        </a>
        <span className={classes.link}>© 2025 PicsArt, Inc.</span>
      </div>
    </div>
  )
}

export default IntroFooter
