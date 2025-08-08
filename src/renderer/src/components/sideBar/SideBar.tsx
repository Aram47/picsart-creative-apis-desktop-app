import React from 'react'
import { useStyles } from './sideBar.styles'
import { Account, FilesBlock } from '@components/index'

const SideBar: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.sideBar}>
      <div className={classes.sideBarContainer}>
        <FilesBlock />
        <Account />
      </div>
    </div>
  )
}

export default SideBar
