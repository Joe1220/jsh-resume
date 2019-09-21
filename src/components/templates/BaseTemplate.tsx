import React from "react"
import styled, { css } from "styled-components"
import { observer } from "mobx-react"

import { NavBar } from "components/organisms"

interface IStyledBaseTemplate {
  backgroundImg?: string
  nav?: boolean
}

interface IStyledContent {
  minHeight?: string
  templateStyle?: any
}

const StyledBaseTemplate = styled("div")<IStyledBaseTemplate>`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 768px) {
    h1 {
      font-size: 2.6rem;
    }
  }

  ${props =>
    props.backgroundImg &&
    css`
      background-image: url(${props.backgroundImg});
    `}

  header {
    position: fixed;
    top: 0;
  }

  label {
    margin-bottom: ${props => props.theme.spaces.lg};
  }
`

const StyledContent = styled("div")<IStyledContent>`
  box-sizing: border-box;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${props =>
    props.minHeight &&
    css`
      min-height: ${props.minHeight};
    `}

  ${props => props.templateStyle};
`

const StyledFooter = styled("footer")`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: ${props => props.theme.spaces.base};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export default observer(
  ({ nav, backgroundImg, HeadComponent, children, Footer, templateStyle, ...props }) => (
    <StyledBaseTemplate {...props} backgroundImg={backgroundImg}>
      {nav && <NavBar />}
      {HeadComponent && <HeadComponent />}
      <StyledContent templateStyle={templateStyle}>{children}</StyledContent>
      {Footer && <StyledFooter>{Footer}</StyledFooter>}
    </StyledBaseTemplate>
  )
)
