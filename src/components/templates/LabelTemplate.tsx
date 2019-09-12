import React from "react"
import styled, { css } from "styled-components"

import Theme from "config/styles"

interface IStyledLabelTemplate {
  bgColor?: string
}

const StyledLabelTemplate = styled("div")<IStyledLabelTemplate>`
  width: 100%;
  background: ${props => props.bgColor};
  padding: ${props => props.theme.spaces.resumeSectionPadding};
`

const StyledLabelContent = styled("div")`
  width: 100%;
  max-width: ${props => props.theme.widths.labelContentMaxWidth};
  display: flex;
  flex-direction: row;
  margin: 0 auto;

  div {
    margin-bottom: ${props => props.theme.spaces.lg};
  }

  .first-column {
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
      display: none;
    }
  }

  .last-column {
    margin-left: ${props => props.theme.spaces.xxlg};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`

export default ({ bgColor = Theme.colors.white, children, ...props }) => {
  return (
    <StyledLabelTemplate bgColor={bgColor} {...props}>
      <StyledLabelContent>{children}</StyledLabelContent>
    </StyledLabelTemplate>
  )
}
