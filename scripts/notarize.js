import path from 'path'
import dotenv from 'dotenv'
import { notarize } from 'electron-notarize'

dotenv.config()

export default async function (context) {
  const { electronPlatformName, appOutDir } = context
  if (electronPlatformName !== 'darwin') {
    console.log('Skipping notarization because this is not a macOS build.')
    return
  }

  const appPath = path.join(appOutDir, `${context.packager.appInfo.productFilename}.app`)
  const appBundleId = process.env.APP_BUNDLE_ID
  const appleId = process.env.APPLE_ID
  const appleIdPassword = process.env.APPLE_ID_PASSWORD
  const teamId = process.env.TEAM_ID
  console.log(`Notarizing ${appPath}...`)

  try {
    await notarize({
      appBundleId,
      appPath,
      tool: 'notarytool',
      teamId,
      appleId,
      appleIdPassword
    })
    console.log('Notarization complete.')
  } catch (error) {
    console.error('Notarization failed:', error)
  }
}
