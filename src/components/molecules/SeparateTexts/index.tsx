import styled from "styled-components"

import { P } from "components/atoms"
import { IP } from "components/atoms/P"

interface ISeparateTexts extends IP {
  customSeparate?: string
  texts: string[]
}

const StyledSeparateTexts = styled("div")`
  display: flex;
  margin: 12px 0 30px 0;

  p > span {
    margin: ${props => props.theme.spaces.lg};
  }
`

/**
 * 문자열 받은 후 default로 &bull;로 문자 사이 분할. isSlash일 경우 /로 분할
 * @param customSeparate `원하는 separate 문자가 있을 경우 기입 (ex - /, - 등...)`
 */
const SeparateTexts: React.SFC<ISeparateTexts> = ({ texts, customSeparate = "•", ...props }) => (
  <StyledSeparateTexts>
    {texts.map((text, index) => (
      <P key={index} {...props}>
        {index !== 0 && <span>{customSeparate}</span>}
        {text}
      </P>
    ))}
  </StyledSeparateTexts>
)

export default SeparateTexts
