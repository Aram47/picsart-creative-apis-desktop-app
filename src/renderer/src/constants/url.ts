// general API URLs
export const PICSART_URL = 'https://api.picsart.io/tools/1.0/' as const
export const PICSART_URL_GENERAL = 'https://genai-api.picsart.io/v1/' as const

// endpoints
export const REMOVEBG_ENDP = 'removebg' as const
export const UPSCALE_ENDP = 'upscale' as const
export const BALANACE_ENDP = 'balance' as const
export const GENERATE_IMAGES_ENDP = 'text2image' as const
export const INFERENCES_ENDP = 'inferences' as const
export const HEADER_API_KEY_NAME = 'X-Picsart-API-Key' as const

// General Links
export const PICSART_IO = 'https://picsart.io/'
export const QUERY_PARAM = 'utm_source=desktop&utm_medium=app&utm_campaign=plugins' as const
export const CONSOLE = 'https://console.picsart.io' + QUERY_PARAM

// Additional Links

export const PICSART_ENTERPRISE_TERMS = 'https://picsart.com/developer-guidelines/' as const
export const PRIVACY_POLICY = 'https://picsart.com/privacy-policy/' as const
export const TRUST_CENTER = 'https://picsart.io/trust/' as const
export const HELP_CENTER = 'https://support.picsart.com/hc/en-us' as const
export const PRICING = 'https://console.picsart.io/dashboard/usage/";' as const
export const SUPPORT_REQUEST = 'https://help.picsart.io/hc/en-us/requests/new' as const
export const GENAI_TERMS = 'https://picsart.com/genaitermsofuse/' as const

// API Key and Subscription Information
export const BUY_MORE_CREDITS_URL =
  'https://console.picsart.io/dashboard/usage/api/?type=subscription'
export const GET_API_KEY_URL = 'https://console.picsart.io/dashboard/apps/'

const urls = {
  PICSART_URL,
  PICSART_URL_GENERAL,
  REMOVEBG_ENDP,
  UPSCALE_ENDP,
  BALANACE_ENDP,
  GENERATE_IMAGES_ENDP,
  INFERENCES_ENDP,
  HEADER_API_KEY_NAME,
  PICSART_ENTERPRISE_TERMS,
  PRIVACY_POLICY,
  TRUST_CENTER,
  HELP_CENTER,
  PRICING,
  BUY_MORE_CREDITS_URL,
  GET_API_KEY_URL,
  GENAI_TERMS
} as const

export default urls
