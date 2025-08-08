import React, { useState } from 'react'
import UploadIcon from '@assets/icons/upload.svg'
import { useUploadBoxStyles } from './uploadBox.styles'

interface UploadBoxProps {
  handleFileSelect: (arg1: string, arg2: File) => void
}

const UploadBox: React.FC<UploadBoxProps> = ({ handleFileSelect }) => {
  const classes = useUploadBoxStyles()
  const [filePreview, setFilePreview] = useState<string | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files && event.target.files[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setFilePreview(url)
      handleFileSelect(url, file)
    }
  }

  return (
    <div className={`${classes.uploadBox} ${filePreview}`}>
      <label className={classes.uploadLabel}>
        <input type="file" onChange={handleFileChange} className={classes.fileInput} />
        {filePreview ? (
          <img src={filePreview} alt="Uploaded preview" className={classes.filePreview} />
        ) : (
          <>
            <span>Upload an Image</span>
            <img className={classes.uploadIcon} src={UploadIcon} alt="Upload Icon" />
          </>
        )}
      </label>
    </div>
  )
}

export default UploadBox
