import React from "react"
import styled from "styled-components"
import { observer } from "mobx-react"

import { Navigation } from "components/molecules"

const StyledNavBar = styled("header")`
  width: 100%;
  background: ${props => props.theme.colors.lightBlack};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  a {
    color: ${props => props.theme.colors.white};
    padding: 0.7rem 0.9rem;
  }

  @media (max-width: 1200px) {
    a {
      font-size: 0.8;
      margin-right: ${props => props.theme.spaces.sm};
    }
  }
`

const NavBar: React.FC = observer(() => {
  return (
    <StyledNavBar>
      <Navigation />
    </StyledNavBar>
  )
})

export default NavBar
