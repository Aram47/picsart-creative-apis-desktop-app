import { INCOMPATIBLE_FIELDS, INPUT_IMAGE_INVALID, TOKEN_ERR } from '@constants/index'
import { RequestsResponse } from '@renderer/api'

export const validateResponse = (res: any): RequestsResponse => {
  if (res.message == TOKEN_ERR) {
    return {
      success: false,
      msg: res.detail,
      errorCode: TOKEN_ERR
    }
  }
  if (res.message == INCOMPATIBLE_FIELDS) {
    return {
      success: false,
      msg: res.detail,
      errorCode: INCOMPATIBLE_FIELDS
    }
  }
  if (res.message == INPUT_IMAGE_INVALID) {
    return {
      success: false,
      msg: res.detail,
      errorCode: INPUT_IMAGE_INVALID
    }
  }

  return {
    success: true,
    msg: 'OK'
  }
}
