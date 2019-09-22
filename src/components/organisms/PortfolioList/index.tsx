import styled from "styled-components"

import { PortfolioItem } from "components/molecules"
import { PortfolioModal } from "components/organisms"
import RESUME from "config/resume.json"

const StyledPortfolioList = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: ${props => props.theme.spaces.lg};
  grid-template-rows: minmax(170px, 200px);

  @media (max-width: 768px) {
    grid-template-rows: minmax(70px, 100px);
  }
`

export default () => {
  return (
    <StyledPortfolioList>
      {RESUME.portfolio.map((item, index) => (
        <PortfolioModal key={index} {...item}>
          <PortfolioItem {...item} />
        </PortfolioModal>
      ))}
    </StyledPortfolioList>
  )
}
