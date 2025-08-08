import { useStyles } from './body.styles'
import { SideBar, Content } from '@components/index'
const Body: React.FC = () => {
  const classes = useStyles()

  return (
    <main className={classes.body}>
      <SideBar />
      <Content />
    </main>
  )
}

export default Body
