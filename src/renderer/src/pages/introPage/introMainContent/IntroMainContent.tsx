import { useContext, useState } from 'react'
import { GlobalContext, IContextType, setLoadMainContent } from '@app/index'
import { isValidKeyRequest } from '@api/index'
import { API_KEY_NAME, CONSOLE, NO_VALID_KEY, PICSART_IO } from '@constants/index'
import IntorImg from '@assets/images/introimg.png'
import useStyles from './IntroMainContent.style'

const IntroMainContent: React.FC = () => {
  const classes = useStyles()
  const context = useContext(GlobalContext) as IContextType

  const [value, setValue] = useState<string>('')
  const [error, setError] = useState<string>('')
  const { dispatch } = context

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setError('')
    setValue(e.target.value)
  }

  const handleBtnClick = (): void => {
    const checkKey = async (): Promise<void> => {
      const response = await isValidKeyRequest(value)
      if (response) {
        await window.api.saveKey(API_KEY_NAME, value)
        dispatch(setLoadMainContent(true))
      } else {
        setError(NO_VALID_KEY)
      }
    }
    checkKey()
  }

  return (
    <div className={classes.mainContent}>
      <div className={classes.upperMainContent}>
        <div className={classes.imgWrapper}>
          <div className={classes.imgContainer}>
            <img className={classes.img} src={IntorImg} alt="intro img" />
          </div>
        </div>
        <div className={classes.upperText}>
          <span className={classes.text}>
            1. To use the plugin, go to{' '}
            <a className={classes.link} href={PICSART_IO} target="_blank" rel="noreferrer">
              Picsart.io
            </a>{' '}
            and create a free account.
          </span>
          <span className={classes.text}>
            2. Go to the{' '}
            <a className={classes.link} href={CONSOLE} target="_blank" rel="noreferrer">
              Console
            </a>
            , copy and paste your API key here.
          </span>
        </div>
      </div>
      <div className={classes.mainContentDown}>
        <div className={classes.inputAndBtn}>
          <input
            className={`${classes.input} ${error ? classes.inputErr : ''}`}
            placeholder="API key"
            type="text"
            value={value}
            onChange={handleInputChange}
          />
          {error && <span className={classes.errorText}>{error}</span>}
          <button
            onClick={handleBtnClick}
            className={`${classes.btn} ${!value ? classes.btnDisabled : ''}`}
            type="button"
            disabled={!value}
          >
            Continue
          </button>
        </div>
        <span className={classes.learnAbout}>Learn about API key</span>
      </div>
    </div>
  )
}

export default IntroMainContent
