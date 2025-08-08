import React, { useState, useRef, useEffect } from 'react'
import useStyles from './selector.styles'

import ArrowRight from '@assets/icons/arrow-right.svg'
import ArrowDown from '@assets/icons/arrow-down.svg'

interface Props {
  actionFn: (string) => void
  openFn?: () => void
  closeFn: () => void
  text: string
  options: Readonly<string[]>
  disabled: boolean
  width?: number
  height?: number
  top?: string | number
  bottom?: string | number
}

const Selector: React.FC<Props> = ({
  actionFn,
  openFn,
  closeFn,
  text,
  options,
  disabled,
  width = 155,
  height = 32,
  top = '100%',
  bottom = 'none'
}) => {
  const classes = useStyles({ width, height, top, bottom })
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(text)
  const selectorRef = useRef<HTMLDivElement | null>(null)

  const toggleOpen = (): void => {
    if (disabled) return
    if (isOpen) {
      closeFn()
    } else {
      if (openFn) {
        openFn()
      }
    }
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option: string): void => {
    setSelectedOption(option)
    setIsOpen(false)
    actionFn(option)
  }

  const handleClickOutside = (event: MouseEvent): void => {
    if (selectorRef.current && !selectorRef.current.contains(event.target as Node)) {
      setIsOpen(false)
      closeFn()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return (): void => {
      closeFn()
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  return (
    <div
      className={`${classes.selector} ${disabled ? classes.disabledSelector : ''}`}
      onClick={toggleOpen}
      ref={selectorRef}
    >
      <div className="label">
        <span className={classes.text}>{selectedOption}</span>
        <img src={isOpen ? ArrowDown : ArrowRight} alt="Toggle Icon" className="icon" />
      </div>
      {isOpen && (
        <div className="options">
          {options?.map((option, index) => (
            <div key={index} className="option" onClick={() => handleOptionClick(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default React.memo(Selector)
