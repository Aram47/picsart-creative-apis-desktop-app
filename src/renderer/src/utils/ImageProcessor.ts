import { processImage, RequestsResponse } from '@api/index'
import { ProcessingImagePropsScheme } from '@app/index'

export const extractBytesFromFile = async (file: File): Promise<ArrayBuffer> => {
  const reader = new FileReader()
  return new Promise((res) => {
    reader.onloadend = (): void => {
      res(reader.result as ArrayBuffer)
    }
    reader.readAsArrayBuffer(file)
  })
}

export const processImageAndDraw = async (
  formObj: ProcessingImagePropsScheme
): Promise<RequestsResponse> => {
  const res = await processImage(formObj)
  const blob = res.data
  if (res.success) {
    return {
      success: true,
      msg: 'Image successfulyy fetched',
      data: blob
    }
  } else {
    return {
      success: false,
      msg: res.msg,
      data: blob
    }
  }
}
