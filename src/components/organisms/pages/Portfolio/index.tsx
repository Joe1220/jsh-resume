import { PortfolioList } from "components/organisms"
import { BaseTemplate } from "components/templates"
import Theme from "config/styles"
import { Label } from "components/atoms"

const basetemplateStyle = `
  padding: ${Theme.spaces.resumeSectionPadding};
  background: ${Theme.colors.thickWhite};
`

const Portfolio = () => {
  return (
    <BaseTemplate templateStyle={basetemplateStyle} id="PORTFOLIO">
      <Label xlg thick>
        PORTFOLIO
      </Label>
      <PortfolioList />
    </BaseTemplate>
  )
}

export default Portfolio
