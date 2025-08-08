import React, { useContext, useState } from 'react'
import { ColorPicker, Input } from '@components/index'
import useStyles from './colorPallete.style'
import MakeTransparentIcon from '@assets/icons/makeTransparent.svg'
import {
  addBackgroundFilter,
  GlobalContext,
  IFilterDetailed,
  setFilterDetailed,
  showBigColorPalette
} from '@app/index'
import { BACKGROUND_COLOR_ACTION_NAME } from '@constants/index'
import { useOutsideClick } from '@renderer/hooks/useOutsideClick'

const colors = ['#101A27', '#6738EA', '#3438C7', '#2C8FF9', '#56C4BF', '#0B8E51']

const ColorPallete: React.FC = () => {
  const classes = useStyles()
  const { dispatch } = useContext(GlobalContext)!
  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [hexColor, setHexColor] = useState<string>('')

  const handleColorSelect = (color: string | null): void => {
    setSelectedColor(color)
    dispatch(addBackgroundFilter({ name: BACKGROUND_COLOR_ACTION_NAME, val: color as string }))
  }

  const handleColorPickerSet = (color: string): void => {
    setHexColor(color)
    dispatch(addBackgroundFilter({ name: BACKGROUND_COLOR_ACTION_NAME, val: color }))
  }

  const paletteRef = useOutsideClick(() => {
    dispatch(setFilterDetailed(IFilterDetailed.BACKGROUND_COLOR))

    dispatch(showBigColorPalette(false))
  })

  return (
    <div className={classes.colorPallete} ref={paletteRef}>
      <ColorPicker setColor={handleColorPickerSet} />
      <Input text={hexColor.slice(1)} />
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
        </div>
      </div>
    </div>
  )
}

export default ColorPallete
