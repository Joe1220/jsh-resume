import { LabelTemplate } from "components/templates"
import { Label } from "components/atoms"
import { InfoGroup } from "components/organisms"
import RESUME from "config/resume.json"

const Education: React.SFC = () => {
  return (
    <LabelTemplate id="EDUCATION" bottomColor>
      <div className="first-column">
        <Label thick bottomColor lg>
          EDUCATION
        </Label>
      </div>
      <div className="last-column">
        <InfoGroup infos={RESUME.education} secondCustomSeparate="•" />
      </div>
    </LabelTemplate>
  )
}

export default Education
