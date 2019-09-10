import React from "react"
import { storiesOf } from "@storybook/react"
import { text, boolean } from "@storybook/addon-knobs"

import H1 from "./"
import { wInfo } from "utils/storybook"

const stories = storiesOf("Components/Atoms", module)

stories.add(
  "H1",
  () => (
    <H1
      thick={boolean("thick", false)}
      blue={boolean("blue text", false)}
      white={boolean("white text", false)}
      grey={boolean("grey text", false)}
      error={boolean("error text", false)}
    >
      {text("text", "test")}
    </H1>
  ),
  wInfo(
    `
   ###  Notes

   This is a H1(h1 tag)

   ### Usage
   ~~~js
     <H1>h1 tag</H1>
   ~~~
  `
  )
)

export default undefined
