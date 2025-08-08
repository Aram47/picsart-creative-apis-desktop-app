import {
  API_KEY_NAME,
  BALANACE_ENDP,
  HEADER_API_KEY_NAME,
  PICSART_URL,
  TOKEN_ERR
} from '@constants/index'
import { validateResponse } from '@renderer/utils/Validation'

export interface RequestsResponse {
  success: boolean
  msg: string
  data?: string | number | Blob
  errorCode?: string
}

export const isValidKeyRequest = async (key: string): Promise<boolean> => {
  try {
    const response = await fetch(PICSART_URL + BALANACE_ENDP, {
      headers: { [HEADER_API_KEY_NAME]: key }
    })
    const res = await response.json()

    if (res.message === TOKEN_ERR) {
      return false
    }
    return true
  } catch (error) {
    return false
  }
}

export const getBalance = async (): Promise<RequestsResponse> => {
  try {
    if (!(await window.api.getKey(API_KEY_NAME))) {
      return {
        success: false,
        msg: TOKEN_ERR
      }
    }
    const response = await fetch(PICSART_URL + BALANACE_ENDP, {
      headers: { [HEADER_API_KEY_NAME]: await window.api.getKey(API_KEY_NAME) }
    })

    const data = await response.json()

    return {
      success: true,
      msg: data.credits
    }
  } catch (error) {
    let msg = 'An error occurred'

    if (error instanceof Error) {
      msg = error.message
    }

    return {
      success: false,
      msg
    }
  }
}

export const processImage = async (formObj: {
  formData: FormData
  url: string
}): Promise<RequestsResponse> => {
  try {
    const { formData, url } = formObj
    const response = await fetch(url, {
      method: 'POST',
      headers: { [HEADER_API_KEY_NAME]: await window.api.getKey(API_KEY_NAME) },
      body: formData
    })

    const res = await response.json()
    const validatedRes = validateResponse(res)
    if (!validatedRes.success) {
      return validatedRes
    }
    const imageResponse = await fetch(res.data.url)
    const blob = await imageResponse.blob()
    console.log(imageResponse)
    return {
      success: true,
      msg: 'OK',
      data: blob
    }
  } catch (error) {
    return {
      success: false,
      msg: error as string
    }
  }
}
