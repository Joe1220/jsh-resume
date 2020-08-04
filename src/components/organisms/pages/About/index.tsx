import { LabelTemplate } from "components/templates"
import { P, Img, Label } from "components/atoms"
import Theme from "config/styles"
import { SeparateTexts, PList } from "components/molecules"
import RESUME from "config/resume.json"
import { UseColorChange } from "utils/hooks"

const Home: React.SFC = () => {
  const useColorChange1 = UseColorChange(Theme.colors.white, Theme.colors.purpleBlue)
  return (
    <LabelTemplate bgColor={Theme.colors.lightBlack} id="ABOUT">
      <div className="first-column">
        <Img isborder alt="my picture" width="8.3rem" height="8.3rem" src={RESUME.basics.picture} />
      </div>
      <div className="last-column">
        <div>
          <Label thick white lg>
            About Me
          </Label>
          <SeparateTexts texts={RESUME.basics.summary} lightGrey />
        </div>
        <div>
          <Label thick white lg>
            Contact Details
          </Label>
          <P {...useColorChange1}>{RESUME.basics.email}</P>
        </div>
      </div>
    </LabelTemplate>
  )
}

export default Home
