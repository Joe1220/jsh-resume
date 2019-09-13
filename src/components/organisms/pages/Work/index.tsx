import { LabelTemplate } from "components/templates"
import { Label } from "components/atoms"
import { InfoGroup } from "components/organisms"
import RESUME from "config/resume.json"

const Work: React.SFC = () => {
  return (
    <LabelTemplate id="WORK" bottomColor>
      <div className="first-column">
        <Label thick bottomColor lg>
          WORK
        </Label>
      </div>
      <div className="last-column">
        <InfoGroup infos={RESUME.work} secondCustomSeparate="•" />
      </div>
    </LabelTemplate>
  )
}

export default Work
