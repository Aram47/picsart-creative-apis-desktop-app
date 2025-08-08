import { Header, Body, Footer, LoadingSpinner, Toast, ChangeAPIkeyModal } from '@components/index'
import useStyles from './mainPage.style'
import { useContext } from 'react'
import { GlobalContext } from '@app/index'

const MainPage: React.FC = () => {
  const classes = useStyles()

  const { state } = useContext(GlobalContext)!

  return (
    <div className={classes.main}>
      <div className={classes.mainContainer}>
        {state.toast && <Toast text={state.toast.text} type={state.toast.type} />}
        {state.imgProcessingLoading && <LoadingSpinner />}
        <Header />
        <Body />
        <Footer />
        {state.showChangeKeyModal && <ChangeAPIkeyModal />}
      </div>
    </div>
  )
}

export default MainPage
