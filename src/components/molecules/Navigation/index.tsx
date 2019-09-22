import React from "react"
import { observer } from "mobx-react"

import { Nav, Link, A } from "components/atoms"

const Navigation: React.FC = observer(() => {
  return (
    <Nav>
      <ul>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/#ABOUT">ABOUT</Link>
        </li>
        <li>
          <Link href="/#WORK">WORK</Link>
        </li>
        <li>
          <Link href="/#EDUCATION">EDUCATION</Link>
        </li>
        <li>
          <Link href="/#SKILLS">SKILLS</Link>
        </li>
        <li>
          <Link href="/#PORTFOLIO">PORTFOLIO</Link>
        </li>
      </ul>
    </Nav>
  )
})

export default Navigation
