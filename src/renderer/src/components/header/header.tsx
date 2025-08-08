import React from 'react'
import { useStyles } from './header.styles'
import StartProcessingBtn from '../startProcessingBtn'

const Header: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.header}>
      <span className={classes.text}>
        Flexible pricing, powerful creative tools, and endless customization options to match your
        unique printing needs.
      </span>
      <StartProcessingBtn />
    </div>
  )
}

export default Header
