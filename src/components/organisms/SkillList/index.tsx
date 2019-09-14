import styled from "styled-components"

import { ProgressBar } from "components/molecules"
import RESUME from "config/resume.json"

const StyledSkillList = styled("div")`
  display: flex;
  flex-direction: column;

  div {
    margin-bottom: 60px;
  }
`

/**
 * 문자열 받은 후 default로 &bull;로 문자 사이 분할. isSlash일 경우 /로 분할
 * @param customSeparate `원하는 separate 문자가 있을 경우 기입 (ex - /, - 등...)`
 */
const SkillList: React.SFC = () => (
  <StyledSkillList>
    {RESUME.skills[0].skillDetails.map((skill, index) => (
      <ProgressBar key={index} {...skill} />
    ))}
  </StyledSkillList>
)

export default SkillList
