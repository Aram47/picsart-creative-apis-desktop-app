/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { getBalance } from '@renderer/api'
import { GlobalContext, setShowChangeKeyModal, setUpdateBalance } from '@app/index'
import { useStyles } from './account.styles'
import { BUY_MORE_CREDITS_URL } from '@constants/index'

const Account: React.FC = () => {
  const classes = useStyles()
  const [balance, setBalance] = useState<string>('0')
  const { state, dispatch } = useContext(GlobalContext)!

  useEffect(() => {
    const fetchBalanace = async (): Promise<void> => {
      const result = await getBalance()
      if (result.success) {
        setBalance(result.msg)
        dispatch(setUpdateBalance(false))
      }
    }
    fetchBalanace()
  }, [state.updateBalance])

  const handleClick = (): void => {
    dispatch(setShowChangeKeyModal(true))
  }

  return (
    <div className={classes.account}>
      <div className={classes.accountContainer}>
        <span className={classes.title}>Current balance</span>
        <div className={classes.textadnBtns}>
          <div>
            <p className={classes.creditsText}>{balance} credits left </p>
            <p className={classes.upgradeText}>Upgrade your plan for more credits</p>
          </div>
          <div className={classes.btns}>
            <div className={classes.btn}>
              <a
                href={BUY_MORE_CREDITS_URL}
                target="_blank"
                className={classes.btnText}
                rel="noreferrer"
              >
                Buy more credits
              </a>
            </div>
            <a onClick={handleClick} className={classes.changeApiKey}>
              Change API key
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Account)
