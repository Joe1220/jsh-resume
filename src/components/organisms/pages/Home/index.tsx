import { BaseTemplate } from "components/templates"
import { H1, Hr, Link } from "components/atoms"
import { DownArrow } from "components/atoms/Svg"
import { IconNav } from "components/molecules"
import Theme from "config/styles"
import JSON from "config/resume.json"

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
        {JSON.basics.name}
      </H1>
      <Hr />
      <IconNav color={Theme.colors.white} />
    </BaseTemplate>
  )
}

export default Home
