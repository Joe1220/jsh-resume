import { LabelTemplate } from "components/templates"
import { Label } from "components/atoms"
import { InfoGroup } from "components/organisms"
import RESUME from "config/resume.json"
import { SkillList } from "components/organisms"

const Skills: React.SFC = () => {
  return (
    <LabelTemplate id="SKILLS" bottomColor>
      <div className="first-column">
        <Label thick bottomColor lg>
          SKILLS
        </Label>
      </div>
      <div className="last-column">
        <InfoGroup infos={RESUME.skills} secondCustomSeparate="- " />
        <SkillList />
      </div>
    </LabelTemplate>
  )
}

export default Skills
