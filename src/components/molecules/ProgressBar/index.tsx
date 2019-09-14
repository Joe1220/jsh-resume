import styled from "styled-components"

import { P } from "components/atoms"
import { IP } from "components/atoms/P"
import { UseProgress } from "utils/hooks"
import Theme from "config/styles"

interface IProgressBar extends IP {
  percent: string
  name: string
}

const StyledContainer = styled("div")`
  /** component가 mount된 후 width 수정 */
  background: ${props => props.theme.colors.lightGrey};
  vertical-align: center;
  height: 42px;
  width: 100%;
`

const StyledProgressBar = styled("div")`
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const ProgressBar: React.SFC<IProgressBar> = ({
  percent = "40%",
  name = "javascript",
  ...props
}) => {
  const useProgress = UseProgress({
    percentage: percent,
    beforeColor: Theme.colors.black,
    afterColor: Theme.colors.purpleBlue
  })
  return (
    <StyledContainer>
      <StyledProgressBar {...useProgress}>
        <P white thick {...props}>
          {name}
        </P>
      </StyledProgressBar>
    </StyledContainer>
  )
}

export default ProgressBar
