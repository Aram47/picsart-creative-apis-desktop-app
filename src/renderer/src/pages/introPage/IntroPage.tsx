import IntroFooter from './introFooter/IntroFooter'
import IntroHeader from './introHeader/IntroHeader'
import IntroMainContent from './introMainContent/IntroMainContent'
import useStyles from './introPage.style'

const IntroPage: React.FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.Intro}>
      <div className={classes.IntroContainer}>
        <IntroHeader />
        <IntroMainContent />
        <IntroFooter />
      </div>
    </div>
  )
}

export default IntroPage
