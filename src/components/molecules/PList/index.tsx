import styled from "styled-components"

import { P } from "components/atoms"
import { IP } from "components/atoms/P"

export interface IPList extends IP {
  customSeparate?: string
  texts: string[]
}

const StyledPList = styled("div")`
  display: flex;
  flex-direction: column;

  p > span {
    margin-bottom: ${props => props.theme.spaces.lg};
  }

  p {
    margin-bottom: ${props => props.theme.spaces.base};
  }
`

/**
 * 문자열 받은 후 default로 &bull;로 문자 사이 분할. isSlash일 경우 /로 분할
 * @param customSeparate `원하는 separate 문자가 있을 경우 기입 (ex - /, - 등...)`
 */
const PList: React.SFC<IPList> = ({ texts, customSeparate, ...props }) => (
  <StyledPList>
    {texts.map((text, index) => (
      <P key={index} {...props}>
        {customSeparate && <span>{customSeparate}</span>}
        {text}
      </P>
    ))}
  </StyledPList>
)

export default PList
