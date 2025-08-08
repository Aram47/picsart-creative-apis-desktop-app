import React, { useContext } from 'react'
import { useStyles } from './startProcessingBtn.styles'
import {
  GlobalContext,
  PAGES,
  ProcessingImagePropsScheme,
  setImageProcessingLoading,
  setSelectedImage,
  setToast,
  setUpdateBalance
} from '@app/index'
import { processImageAndDraw } from '@renderer/utils/ImageProcessor'
import {
  makeFormAndURLForRemoveBackground,
  makeFormAndURLForEnhance
} from '@renderer/utils/RequestWrappers'
import { API_KEY_NAME, IMAGE_APPLIED_SUCC, NO_VALID_KEY } from '@constants/index'

const makerFns = {
  [PAGES.REMOVE_BG]: makeFormAndURLForRemoveBackground,
  [PAGES.ENHANCE]: makeFormAndURLForEnhance
}
const functionParams = {
  [PAGES.REMOVE_BG]: 'backgroundFilters',
  [PAGES.ENHANCE]: 'enhanceFilters'
}

const StartProcessingBtn: React.FC = () => {
  const classes = useStyles()
  const { state, dispatch } = useContext(GlobalContext)!
  const { selectedPage, selectedImage, backgroundFilters, enhanceFilters } = state

  let is_disabled = !selectedImage

  if (selectedPage === PAGES.REMOVE_BG) {
    is_disabled = !selectedImage || backgroundFilters.length === 0
  } else if (selectedPage === PAGES.ENHANCE) {
    is_disabled = !selectedImage || enhanceFilters.length === 0
  }

  const startProcessing = async (): Promise<void> => {
    if (is_disabled) return
    if (!(await window.api.getKey(API_KEY_NAME))) {
      dispatch(setToast({ text: NO_VALID_KEY, type: 'error' }))
      return
    }

    dispatch(setImageProcessingLoading(true))
    const response = await fetch(selectedImage)
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`)
    }

    const imageBytes = await (await response.blob()).arrayBuffer()
    // selecting function based on page
    const fn = makerFns[selectedPage]
    const params = state[functionParams[selectedPage]]

    console.log(params)
    const formObj = await fn(params, imageBytes)
    const res = await processImageAndDraw(formObj as ProcessingImagePropsScheme)
    if (res.success) {
      const reader = new FileReader()
      reader.onloadend = (): void => {
        const img = new Image()
        img.src = reader.result as string

        img.onload = (): void => {
          dispatch(setSelectedImage(img.src))
        }
      }
      reader.readAsDataURL(res.data as Blob)
      dispatch(setToast({ text: IMAGE_APPLIED_SUCC, type: 'success' }))
    } else {
      dispatch(setToast({ text: res.msg, type: 'error' }))
    }
    dispatch(setImageProcessingLoading(false))
    dispatch(setUpdateBalance(true))
  }

  return (
    <div
      onClick={startProcessing}
      className={`${classes.btn} ${is_disabled ? classes.disabled : ''}`}
    >
      <span className={classes.btnText}>Start Processing</span>
    </div>
  )
}

export default StartProcessingBtn
