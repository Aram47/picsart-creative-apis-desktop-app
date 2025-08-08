import React from 'react'
import useStyles from './slider.styles'

interface SliderProps {
  min?: number
  max?: number
  value: number
  onChange?: (value: number) => void
}

const Slider: React.FC<SliderProps> = ({ min = 0, max = 100, value, onChange }) => {
  const classes = useStyles()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = Number(event.target.value)
    if (onChange) {
      onChange(newValue)
    }
  }

  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        value={value} // Controlled by parent via props
        onChange={handleChange}
        className={`custom-slider ${classes.customSlider}`}
        style={{
          background: `linear-gradient(
            to right,
            #E3E3F8 ${((value - min) / (max - min)) * 100}%, 
            #CBCBCB ${((value - min) / (max - min)) * 100}%
          )`
        }}
      />
    </div>
  )
}

export default React.memo(Slider)
