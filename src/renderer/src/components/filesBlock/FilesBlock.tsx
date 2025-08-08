import React, { useContext, useState, useEffect } from 'react'
import { useStyles } from './filesBlock.styles'
import {
  GlobalContext,
  PAGES,
  removeAllFilters,
  setFilterDetailed,
  setSelectedImage,
  setSelectedPage
} from '@app/index'
import UploadIcon from '@assets/icons/upload.svg'

const FilesBlock: React.FC = () => {
  const classes = useStyles()
  const { state, dispatch } = useContext(GlobalContext)!
  const [images, setImages] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  useEffect((): void => {
    const fetchImages = async (): Promise<void> => {
      try {
        const imagesUrls: string[] = await window.api.getImages()
        setImages(imagesUrls)
      } catch (error) {
        console.error('Error loading images:', error)
      }
    }

    fetchImages()
  }, [])

  useEffect(() => {
    const handleImageAdded = (): void => {
      const fetchUpdatedImages = async (): Promise<void> => {
        try {
          const updatedImages: string[] = await window.api.getImages()
          console.log('updatedImages')
          setImages(updatedImages)
        } catch (error) {
          console.error('Error fetching updated images:', error)
        }
      }

      fetchUpdatedImages()
    }

    window.api.onImageAdded(handleImageAdded)

    return (): void => {
      // window.api.offImageAdded(handleImageAdded)
    }
  }, [])

  const getIndex = async (): Promise<number> => {
    if (await window.api.loadState()) {
      const { index } = await window.api.loadState()
      return index
    } else {
      return 0
    }
  }

  const getPage = async (): Promise<number> => {
    if (await window.api.loadState()) {
      const { page } = await window.api.loadState()
      return page
    } else {
      return 0
    }
  }

  useEffect(() => {
    const init = async (): Promise<void> => {
      setCurrentIndex(await getIndex())
      dispatch(setSelectedPage(await getPage()))
    }
    init()
  }, [])

  const handleImageClick = (imageSrc: string): void => {
    dispatch(setSelectedImage(imageSrc))
  }

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const files = event.target.files
    console.log(11312, files)

    if (files && files.length > 0) {
      for (const file of Array.from(files)) {
        await processFile(file)
      }
    }
    event.target.value = ''
  }

  const handleFileDrop = async (event: React.DragEvent<HTMLDivElement>): Promise<void> => {
    event.preventDefault()
    const files = event.dataTransfer.files
    if (files && files.length > 0) {
      for (const file of Array.from(files)) {
        await processFile(file)
      }
    }
  }

  const processFile = async (file: File): Promise<void> => {
    console.log('processFile', file)

    try {
      const reader = new FileReader()
      reader.onload = async (): Promise<void> => {
        if (reader.result) {
          const base64Data = reader.result as string
          const extension = file.name.split('.').pop()?.toLowerCase() || 'png'
          const fileName = `${currentIndex + 1}.${extension}`
          console.log(fileName)

          const savedPath = await window.api.addImage(base64Data, fileName)
          setImages((prevImages) => {
            const updatedImages = [...prevImages]
            updatedImages[currentIndex] = savedPath
            return updatedImages
          })

          setCurrentIndex((prevIndex) => (prevIndex + 1) % 5)
        }
      }
      reader.readAsDataURL(file)
    } catch (error) {
      console.error('Error processing file:', error)
    }
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault()
  }

  const handlePageClick = async (page: PAGES): Promise<void> => {
    dispatch(removeAllFilters())
    dispatch(setSelectedPage(page))
    dispatch(setFilterDetailed(null))
    await window.api.saveState({ page })
  }
  return (
    <div className={classes.filesBlock}>
      <div className={classes.navigation}>
        <span
          onClick={() => handlePageClick(PAGES.REMOVE_BG)}
          className={`${classes.navigationText} ${state.selectedPage == PAGES.REMOVE_BG ? classes.navigationTextActive : ''}`}
        >
          Remove Background
        </span>
        <span
          onClick={() => handlePageClick(PAGES.ENHANCE)}
          className={`${classes.navigationText} ${state.selectedPage == PAGES.ENHANCE ? classes.navigationTextActive : ''}`}
        >
          Enhance{' '}
        </span>
      </div>
      <div className={classes.uploadBox} onDrop={handleFileDrop} onDragOver={handleDragOver}>
        <div className={classes.uploadBoxContainer}>
          <label className={classes.uploadIconWrapper}>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className={classes.fileInput}
            />
            <img className={classes.icon} src={UploadIcon} alt="upload" />
            <span className={classes.addFfileText}>Add Files</span>
          </label>
          <span className={classes.uploadText}>or drag and drop it here</span>
        </div>
      </div>
      <div className={classes.cantPickAndImages}>
        <span className={classes.cantPick}>
          Can&apos;t pick? <br />
          Try one of these images:
        </span>
        <div className={classes.imagesContainer}>
          {images.map((image, index) => (
            <div key={index} className={classes.imgWrapper} onClick={() => handleImageClick(image)}>
              <img className={classes.img} src={image} alt={`Sample ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FilesBlock
