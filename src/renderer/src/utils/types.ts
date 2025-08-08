export interface Api {
  getImages: () => Promise<string[]>
  addImage: (imageData: string, fileName: string) => Promise<string>
  saveKey: (keyName: string, keyValue: string) => Promise<void>
  getKey: (keyName: string) => Promise<string | null>
  deleteKey: (keyName: string) => Promise<void>
  saveState: (state: Record<string, number>) => Promise<void>
  loadState: () => Promise<Record<string, number>>
  handlePreviewApi: (fileData: { url: string }) => void
  onImageAdded: (cb: () => void) => void
  offImageAdded: (cb: () => void) => void
  readClipboard: () => string
  writeClipboard: (text: string) => void
} 