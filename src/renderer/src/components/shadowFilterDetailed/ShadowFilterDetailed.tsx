import { useCallback, useContext, useEffect, useState } from 'react'
import useStyles from './shadowFilterDetailed.styles'
import useDebounce from '@renderer/hooks/useDebounce'
import { Selector, Slider } from '@components/index'
import { addBackgroundFilter, GlobalContext, removeBackgroundFilter } from '@app/index'
import {
  SHADOW_ACTION_NAME,
  SHADOW_BLUR_ACTION_NAME,
  SHADOW_FILTER_OPTIONS,
  SHADOW_OPACITY_ACTION_NAME
} from '@constants/index'

const ShadowFilterDetailed: React.FC = () => {
  const classes = useStyles()
  const { dispatch } = useContext(GlobalContext)!

  const [blurVal, setBlurVal] = useState<number>(0)
  const [opacityVal, setOpacityVal] = useState<number>(0)

  const debouncedBlurVal = useDebounce(blurVal, 500)
  const debouncedOpacityVal = useDebounce(opacityVal, 500)

  // const addAction = useCallback((actionName: string, value: string) => {}, [])

  const handleResetAll = (): void => {
    setBlurVal(0)
    setOpacityVal(0)
    dispatch(removeBackgroundFilter(SHADOW_BLUR_ACTION_NAME))
    dispatch(removeBackgroundFilter(SHADOW_OPACITY_ACTION_NAME))
  }

  const handleBlurSliderChange = useCallback((val: number) => {
    setBlurVal(val)
  }, [])

  const handleOpacitySliderChange = useCallback((val: number) => {
    setOpacityVal(val)
  }, [])

  useEffect(() => {
    if (debouncedBlurVal !== undefined) {
      dispatch(addBackgroundFilter({ name: SHADOW_BLUR_ACTION_NAME, val: blurVal.toString() }))
    }
  }, [debouncedBlurVal])

  useEffect(() => {
    if (debouncedOpacityVal !== undefined) {
      dispatch(
        addBackgroundFilter({ name: SHADOW_OPACITY_ACTION_NAME, val: opacityVal.toString() })
      )
    }
  }, [debouncedOpacityVal])

  return (
    <div className={classes.shadowFilterDetailed}>
      <div className={classes.shadowFilterDetailedContainer}>
        <div className={classes.wrapper}>
          <div className={classes.resetAll}>
            <span onClick={handleResetAll} className={classes.resetAlltext}>
              Reset all
            </span>
          </div>
          <div className={classes.slidersContainer}>
            <div className={classes.slidersContainerWrapper}>
              <div className={classes.filterContainer}>
                <span className={classes.property}>Blur</span>
                <div className={classes.slider}>
                  <Slider value={blurVal} onChange={handleBlurSliderChange} />
                </div>
                <div className={classes.valueContainer}>
                  <span className={classes.valueText}>{blurVal}</span>
                </div>
              </div>
              <div className={classes.filterContainer}>
                <span className={classes.property}>Opacity</span>
                <div className={classes.slider}>
                  <Slider value={opacityVal} onChange={handleOpacitySliderChange} />
                </div>
                <div className={classes.valueContainer}>
                  <span className={classes.valueText}>{`${opacityVal}%`}</span>
                </div>
              </div>
            </div>
            <Selector
              actionFn={(val) => dispatch(addBackgroundFilter({ name: SHADOW_ACTION_NAME, val }))}
              closeFn={() => console.log(1)}
              text={SHADOW_FILTER_OPTIONS[0]}
              options={SHADOW_FILTER_OPTIONS}
              disabled={false}
              top={'none'}
              bottom={'110%'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShadowFilterDetailed
