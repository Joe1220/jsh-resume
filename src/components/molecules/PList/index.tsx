import styled, { css } from "styled-components"

import { P } from "components/atoms"
import { IP } from "components/atoms/P"

export interface IPList extends IP {
  customSeparate?: string
  texts: string[]
  isRow?: boolean
}

interface IStyledPList {
  isRow?: boolean
}

const StyledPList = styled("div")<IStyledPList>`
  display: flex;
  flex-direction: column;
  ${props =>
    props.isRow &&
    css`
      flex-direction: row;
      p {
        :not(:last-child) {
          margin-right: ${props => props.theme.spaces.base};
        }
      }
    `}
  margin: 12px 0 30px 0;

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
const PList: React.SFC<IPList> = ({ texts, customSeparate, isRow, ...props }) => (
  <StyledPList isRow={isRow}>
    {texts.map((text, index) => (
      <P key={index} {...props}>
        {customSeparate && <span>{customSeparate}</span>}
        {text}
      </P>
    ))}
  </StyledPList>
)

export default PList
