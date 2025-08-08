/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect, useRef, useState } from 'react'
import { GET_API_KEY_URL } from '@constants/url'
import { useChangeApiKeyModalStyles } from './changeAPIkey.styles'
import CloseIcon from '@assets/icons/close.svg'
import { GlobalContext, setShowChangeKeyModal, setUpdateBalance, setToast } from '@app/index'
import { isValidKeyRequest } from '@renderer/api'
import { API_KEY_NAME, NO_VALID_KEY } from '@constants/index'

const ChangeAPIkeyModal: React.FC = () => {
  const { dispatch } = useContext(GlobalContext)!

  const classes = useChangeApiKeyModalStyles()
  const [value, setValue] = useState<string>('')
  const [warning, setWarning] = useState<string>('')
  const [error, setError] = useState<string>()
  const [success, setSuccess] = useState<string>()
  const selectorRef = useRef(null)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = event.target.value
    setValue(newValue)
    setMessagesAsDefault()
  }

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>): void => {
    const pastedValue = event.clipboardData.getData('text')
    setValue(pastedValue)
    setMessagesAsDefault()
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    // Handle Ctrl+V (Windows/Linux) or Cmd+V (Mac) for paste
    if ((event.ctrlKey || event.metaKey) && event.key === 'v') {
      event.preventDefault()
      try {
        const clipboardText = window.api.readClipboard()
        setValue(clipboardText)
        setMessagesAsDefault()
      } catch (error) {
        console.error('Failed to read clipboard:', error)
      }
    }
  }

  const setMessagesAsDefault = (): void => {
    setWarning('')
    setError('')
    setSuccess('')
  }

  const handleClickOutside = (event: MouseEvent): void => {
    if (
      selectorRef.current &&
      !(selectorRef.current as HTMLElement).contains(event.target as HTMLElement)
    ) {
      dispatch(setShowChangeKeyModal(false))
    }
  }

  const checkKey = async (): Promise<void> => {
    setMessagesAsDefault()
    try {
      if (value) {
        const isValid = await isValidKeyRequest(value)
        if (isValid) {
          await window.api.saveKey(API_KEY_NAME, value)
          setSuccess('API Key Set successfully')
          dispatch(setUpdateBalance(true))
          dispatch(setToast({ text: 'API Key Set successfully', type: 'success' }))
          // Close modal and reset form after a short delay to show success message
          setTimeout(() => {
            dispatch(setShowChangeKeyModal(false))
            setValue('')
            setMessagesAsDefault()
          }, 1500)
        } else {
          setError(NO_VALID_KEY)
        }
      } else {
        setWarning('Please Fill Input')
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred')
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, false)
    return (): void => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className={classes.changeApiKeyModal}>
      <div ref={selectorRef} className={classes.modalContainer}>
        <div className={classes.closeContainer}>
          <img
            onClick={() => dispatch(setShowChangeKeyModal(false))}
            className={classes.closeIcon}
            src={CloseIcon}
            alt="Close Icon"
          />
        </div>
        <h1>Enter your Picsart API Key</h1>
        <div className={classes.inputContainer}>
          <input
            value={value}
            onChange={handleInputChange}
            onPaste={handlePaste}
            onKeyDown={handleKeyDown}
            placeholder="API Key"
            type="text"
            name="key"
            className={classes.keysetInput}
          />
          {warning && <span className="warning-text">{warning}</span>}
          {error && <span className="error-text">{error}</span>}
          {success && <span className="success-text">{success}</span>}
          <button onClick={checkKey} className={classes.submit}>
            Submit
          </button>
          <a className={classes.getKey} target="_blank" href={GET_API_KEY_URL} rel="noreferrer">
            Get your Picsart API Key
          </a>
        </div>
      </div>
    </div>
  )
}

export default ChangeAPIkeyModal
