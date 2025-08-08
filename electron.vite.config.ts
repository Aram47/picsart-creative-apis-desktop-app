import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve(__dirname, 'src/renderer/src'),
        '@app': resolve(__dirname, 'src/renderer/src/app'),
        '@constants': resolve(__dirname, 'src/renderer/src/constants'),
        '@components': resolve(__dirname, 'src/renderer/src/components'),
        '@assets': resolve(__dirname, 'src/renderer/src/assets'),
        '@styles': resolve(__dirname, 'src/renderer/src/styles'),
        '@types': resolve(__dirname, 'src/renderer/src/types'),
        '@utils': resolve(__dirname, 'src/renderer/src/utils'),
        '@hooks': resolve(__dirname, 'src/renderer/src/hooks'),
        '@api': resolve(__dirname, 'src/renderer/src/api'),
        '@helpers': resolve(__dirname, 'src/renderer/src/helpers'),
        '@pages': resolve(__dirname, 'src/renderer/src/pages')
      }
    },
    plugins: [react()]
  }
})
