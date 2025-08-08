import { useEffect, useState } from 'react'
import { useReducer } from 'react'
import { GlobalContext } from './app/globalContext'
import { InitialState } from './app/initalState'
import { reducer } from './app/reducer'
import { LoadingSpinner, InternetConnection } from '@components/index'
import { useGlobalStyles } from './styles/global'
import { setLoadingAction, setLoadMainContent } from './app/ActionCreators'
import { IntroPage, MainPage } from './pages'
import { API_KEY_NAME } from '@constants/index'
import { isValidKeyRequest } from './api'
import '@styles/fonts.css'

const App = (): React.ReactElement => {
  useGlobalStyles()

  const [state, dispatch] = useReducer(reducer, InitialState)
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine)

  const { loading, loadMainContent } = state

  const handleOnline = (): void => {
    setIsOnline(true)
  }

  const handleOffline = (): void => {
    setIsOnline(false)
  }

  useEffect((): void => {
    const check = async (): Promise<void> => {
      const key = await window.api.getKey(API_KEY_NAME)
      const res = await isValidKeyRequest(key)
      if (res) {
        dispatch(setLoadMainContent(true))
      } else {
        dispatch(setLoadMainContent(false))
      }
      dispatch(setLoadingAction(false))
    }
    check()
  }, [])

  useEffect(() => {
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return (): void => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  if (!isOnline) {
    return <InternetConnection />
  }

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {loadMainContent ? <MainPage /> : <IntroPage />}
    </GlobalContext.Provider>
  )
}

export default App
