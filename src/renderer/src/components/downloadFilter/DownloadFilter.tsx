import { useContext } from 'react'
import useStyles from './downloadFilter.style'
import DownloadIcon from '@assets/icons/download.svg'
import { GlobalContext } from '@app/index'

const DownloadFilter: React.FC = () => {
  const classes = useStyles()

  const {
    state: { selectedImage }
  } = useContext(GlobalContext)!

  const handleClick = (): void => {
    if (selectedImage) {
      const a = document.createElement('a')
      a.href = selectedImage
      a.download = 'downloaded-image.jpg'

      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    } else {
      console.error('No image selected to download.')
    }
  }
  return (
    <div
      className={`${classes.downloadFilter} ${!selectedImage ? classes.disabled : ''}`}
      onClick={handleClick}
    >
      <div className={classes.downloadFilterContainer}>
        <img src={DownloadIcon} alt="Uploaded preview" className={classes.img} />
        <span className={classes.text}>Download</span>
      </div>
    </div>
  )
}

export default DownloadFilter
