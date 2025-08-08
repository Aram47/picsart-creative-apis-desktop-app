import useStyles from './IntroHeader.style'

const IntroHeader: React.FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.header}>
      <span className={classes.title}>Picsart Background Remover and Image Enhancer</span>
      <span className={classes.subTitle}>
        Flexible pricing, powerful creative tools, and endless customization options to match your
        unique printing needs.
      </span>
    </div>
  )
}

export default IntroHeader
