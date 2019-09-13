import React from "react"
import styled, { css } from "styled-components"

import Theme from "config/styles"

interface IStyledLabelTemplate {
  bgColor?: string
}

interface IStyledLabelContent {
  bottomColor?: boolean
}

const StyledLabelTemplate = styled("div")<IStyledLabelTemplate>`
  width: 100%;
  background: ${props => props.bgColor};
  padding: ${props => props.theme.spaces.resumeSectionPadding};
`

const StyledLabelContent = styled("div")<IStyledLabelContent>`
  width: 100%;
  max-width: ${props => props.theme.widths.labelContentMaxWidth};
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  ${props =>
    props.bottomColor &&
    css`
      border-bottom: 1px solid rgb(232, 232, 232);
    `}

  .first-column {
    @media (max-width: 768px) {
      display: none;
    }
  }

  .last-column {
    margin-left: ${props => props.theme.spaces.xxlg};
    display: flex;
    flex-direction: column;
  }
`

export default ({ bgColor = Theme.colors.white, children, bottomColor = false, ...props }) => {
  return (
    <StyledLabelTemplate bgColor={bgColor} {...props}>
      <StyledLabelContent bottomColor={bottomColor}>{children}</StyledLabelContent>
    </StyledLabelTemplate>
  )
}
