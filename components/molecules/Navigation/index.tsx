import React from "react"
import { observer } from "mobx-react"

import { Nav, Link, A } from "components/atoms"

const Navigation: React.FC = observer(() => {
  return (
    <Nav>
      <li>
        <Link href="/">Lobby</Link>
      </li>
      <li>
        <A href="http://jshresume.co.nf/">About</A>
      </li>
    </Nav>
  )
})

export default Navigation
