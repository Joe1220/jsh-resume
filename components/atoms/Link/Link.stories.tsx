import React from "react"
import { storiesOf } from "@storybook/react"
import { text, boolean } from "@storybook/addon-knobs"

import Link from "./"
import { wInfo } from "@Story/utils"

storiesOf("Components/Atoms", module).add(
  "Link",
  () => (
    <>
      <Link href="/" sm={boolean("small text", false)} lg={boolean("large text", false)}>
        {text("text", "test text")}
      </Link>
    </>
  ),
  wInfo(`
  ### Notes

  This is a Link(Link(next/link)  tag)
  내부 url 시 사용(외부 url시 A component 사용)

  ### Usage
  ~~~js
    <Link lg to='/intert_your_router'>hello</Link>
  ~~~
  `)
)
