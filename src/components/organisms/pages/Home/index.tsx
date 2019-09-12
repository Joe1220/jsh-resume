import { BaseTemplate } from "components/templates"
import { H1, Hr, Link } from "components/atoms"
import { DownArrow } from "components/atoms/Svg"
import { IconNav } from "components/molecules"
import Theme from "config/styles"

const Home: React.SFC = () => {
  return (
    <BaseTemplate
      backgroundImg={"/static/images/background.jpg"}
      minHeight="100vh"
      id="HOME"
      Footer={
        <Link href="#ABOUT">
          <DownArrow color={Theme.colors.white} />
        </Link>
      }
    >
      <H1 thick white>
        Jo Seung Hyun
      </H1>
      <Hr />
      <IconNav color={Theme.colors.white} />
    </BaseTemplate>
  )
}

export default Home
