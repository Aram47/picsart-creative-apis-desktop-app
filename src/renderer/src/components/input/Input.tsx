import React, { useState } from 'react'
import useStyles from './input.styles'
import HashtagIcon from '@assets/icons/hashtag.svg'

interface InputProps {
  text: string
}

const Input: React.FC<InputProps> = ({ text }) => {
  const classes = useStyles()
  const [copied, setCopied] = useState<boolean>(false)

  const handleCopyToClipboard = (): void => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className={classes.insideRemoveBackgroundContainer}>
      <div className={classes.inputContainer} onClick={handleCopyToClipboard}>
        <img className={classes.icon} src={HashtagIcon} alt="icon" />
        <span className={classes.text}>{text}</span>
        {copied && <span className={classes.copiedMessage}>Copied!</span>}
      </div>
    </div>
  )
}

export default Input
