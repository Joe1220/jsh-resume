import React from "react"
import styled, { css } from "styled-components"
import { observer } from "mobx-react"

import { NavBar } from "components/organisms"

interface IStyledBaseTemplate {
  backgroundImg?: string
  nav?: boolean
}

const StyledBaseTemplate = styled("div")<IStyledBaseTemplate>`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  ${props =>
    props.backgroundImg &&
    css`
      background-image: url(${props.backgroundImg});
      background-size: cover;
    `}
`

const StyledContent = styled("section")`
  box-sizing: border-box;
  min-width: 920px;
  border: none;
`

const StyledStaticComponent = styled("div")`
  box-sizing: border-box;
  padding: ${props => props.theme.spaces.lg};
  header {
    position: absolute;
    top: 0;
  }
`

export default observer(({ nav, backgroundImg, HeadComponent, children, Footer, ...props }) => (
  <StyledBaseTemplate {...props} backgroundImg={backgroundImg}>
    {nav && <NavBar />}
    {HeadComponent && (
      <StyledStaticComponent>
        <HeadComponent />
      </StyledStaticComponent>
    )}
    <StyledContent {...props}>{children}</StyledContent>
    {Footer && <Footer />}
  </StyledBaseTemplate>
))
