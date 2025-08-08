import { useContext, useState } from 'react'
import useStyles from './backgroundColorFilterDetailed.style'
import MakeTransparentIcon from '@assets/icons/makeTransparent.svg'
import {
  addBackgroundFilter,
  GlobalContext,
  setFilterDetailed,
  showBigColorPalette
} from '@app/index'
import { BACKGROUND_COLOR_ACTION_NAME } from '@constants/index'

const colors = ['#101A27', '#6738EA', '#3438C7', '#2C8FF9', '#56C4BF', '#0B8E51']

const BackgroundColorFilterDetailed: React.FC = () => {
  const classes = useStyles()
  const { dispatch } = useContext(GlobalContext)!
  const [selectedColor, setSelectedColor] = useState<string | null>(null)

  const handleColorSelect = (color: string | null): void => {
    setSelectedColor(color)
    dispatch(addBackgroundFilter({ name: BACKGROUND_COLOR_ACTION_NAME, val: color as string }))
  }

  const handleBigColorPaletteOpen = (): void => {
    dispatch(showBigColorPalette(true))
    dispatch(setFilterDetailed(null))
  }

  return (
    <>
      <div className={classes.backgroundColorFilterDetailed}>
        <div className={classes.backgroundColorFilterDetailedContainer}>
          <div className={classes.wrapper}>
            <div className={classes.resetAll}>
              <span onClick={() => setSelectedColor(null)} className={classes.resetAlltext}>
                Reset all
              </span>
            </div>
            <div className={classes.colorContainer}>
              <span className={classes.colorContainerText}>Choose the main color</span>
              <div className={classes.paletteContainer}>
                <img
                  src={MakeTransparentIcon}
                  alt="Uploaded preview"
                  className={`${classes.colorBox}`}
                  onClick={() => handleColorSelect(null)}
                />

                {colors.map((color, index) => (
                  <div
                    key={index}
                    className={`${classes.colorBox} ${
                      selectedColor === color ? classes.selectedColor : ''
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorSelect(color)}
                  />
                ))}
                <div onClick={handleBigColorPaletteOpen} className={` ${classes.addBox}`}>
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BackgroundColorFilterDetailed
