import React, { useEffect, useState } from 'react'
import Hue from '@uiw/react-color-hue'
import { HexColorPicker } from 'react-colorful'
import { hsvaToHex, hexToHsva } from '@uiw/color-convert'
import { useColorPickerStyles } from './colorPicker.styles'
import pickerIcon from '@assets/icons/picker.svg'

interface HsvColor {
  h: number
  s: number
  v: number
}

interface HsvaColor extends HsvColor {
  a: number
}

interface ColorPickerProps {
  setColor: (arg1: string) => void
}

const ColorPicker: React.FC<ColorPickerProps> = ({ setColor }) => {
  const classes = useColorPickerStyles()
  const [hsva, setHsva] = useState<HsvaColor>(hexToHsva('#07C4CC'))
  const [hex, setHex] = useState<string>(hsvaToHex(hsva))

  const handleHsvaChange = (newHsva: HsvaColor): void => {
    setHsva(newHsva)
    const newHex = hsvaToHex(newHsva)
    setHex(newHex)
  }

  const handleHexChange = (newHex: string): void => {
    setHex(newHex)
    const newHsva = hexToHsva(newHex)
    setHsva(newHsva)
    setColor(newHex)
  }

  useEffect(() => {
    setColor(hex)
  }, [])

  return (
    <div className={classes.colorPickerContainer}>
      <HexColorPicker color={hex} onChange={handleHexChange} />

      <div className={classes.sliderContainer}>
        <div className={classes.iconContainer}>
          <img className={classes.icon} width={21} height={21} src={pickerIcon} alt="Picker" />
        </div>
        <div className={classes.colorSlider}>
          <Hue
            hue={hsva.h}
            onChange={(newHue) => {
              handleHsvaChange({ ...hsva, ...newHue })
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ColorPicker
