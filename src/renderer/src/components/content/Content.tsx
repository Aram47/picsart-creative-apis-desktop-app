import React, { ReactElement, useContext } from 'react'
import { useStyles } from './content.styles'
import FiltersBlock from '../filtersBlock'
import { GlobalContext, IFilterDetailed } from '@app/index'
import BackgroundColorFilterDetailed from '../backgroundColorFilterDetailed'
import { ColorPallete, ShadowFilterDetailed } from '..'

const Content: React.FC = () => {
  const {
    state: { selectedImage, filterDetailed, showBigColorPalette }
  } = useContext(GlobalContext)!

  const height = filterDetailed != null ? 250 : 361
  const classes = useStyles({ height })

  const detailedContent = (): ReactElement<HTMLElement> | undefined => {
    switch (filterDetailed) {
      case IFilterDetailed.BACKGROUND_COLOR:
        return <BackgroundColorFilterDetailed />
      case IFilterDetailed.SHADOW:
        return <ShadowFilterDetailed />
    }
    return undefined
  }

  return (
    <div className={classes.content}>
      <div className={classes.contentContainer}>
        <div className={classes.imgWrapper}>
          {selectedImage ? (
            <img className={classes.img} src={selectedImage} alt="Selected" title="Selected" />
          ) : (
            <div></div>
          )}
        </div>
        {showBigColorPalette && <ColorPallete />}
        <div className={classes.filtersBlockContainer}>
          <FiltersBlock />
          {filterDetailed !== null && detailedContent()}
        </div>
      </div>
    </div>
  )
}

export default Content
