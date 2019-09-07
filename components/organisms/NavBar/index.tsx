import React from "react"
import styled from "styled-components"
import { observer } from "mobx-react"

import { Navigation } from "components/molecules"
import { Icon, Link } from "components/atoms"

const StyledNavBar = styled("header")`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.grey};

  ${Icon} {
    margin-right: ${props => props.theme.spaces.xlg}px;
  }
`

const NavBar: React.FC = observer(() => {
  return (
    <StyledNavBar>
      <Link href="/">
        <Icon
          src="@/static/images/logo.png"
          alt="webchat homepage logo"
          width="70px"
          height="50px"
        />
      </Link>
      <Navigation />
    </StyledNavBar>
  )
})

export default NavBar
