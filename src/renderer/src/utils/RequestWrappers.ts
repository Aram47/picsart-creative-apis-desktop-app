import { PICSART_URL, REMOVEBG_ENDP, UPSCALE_ENDP } from '@constants/url'
import { Filter } from '@app/index'

export const makeFormAndURLForEnhance = async (
  params,
  imageBytes: ArrayBuffer
): Promise<object> => {
  const factor = params[0].val
  const imageBinary = new Blob([new Uint8Array(imageBytes)], { type: 'image/jpeg' })

  console.log(factor)
  const formData = new FormData()
  formData.append('upscale_factor', factor || '2')
  formData.append('format', 'png')
  formData.append('image', imageBinary)

  return {
    formData,
    url: PICSART_URL + UPSCALE_ENDP
  }
}

export const makeFormAndURLForRemoveBackground = async (
  filters: Filter[],
  imageBytes: ArrayBuffer
): Promise<object> => {
  console.log(imageBytes)
  const imageBinary = new Blob([new Uint8Array(imageBytes)], { type: 'image/jpeg' })
  const formData = new FormData()

  filters.forEach((element) => {
    if (element.val) {
      formData.append(element.name, element.val)
    }
  })
  formData.append('size', 'auto')
  formData.append('image', imageBinary)
  formData.append('shadow', 'bottom-right')

  return {
    formData,
    url: PICSART_URL + REMOVEBG_ENDP
  }
}
