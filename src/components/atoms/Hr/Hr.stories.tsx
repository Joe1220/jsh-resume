import React from "react"
import { storiesOf } from "@storybook/react"

import { wInfo } from "utils/storybook"
import Hr from "./"
import { H1 } from ".."

const stories = storiesOf("Components/Atoms", module)

stories.add(
  "Hr",
  () => (
    <>
      <H1>one</H1>
      <Hr />
      <H1>two</H1>
    </>
  ),
  wInfo(
    `
   ###  Notes

   This is a Hr(hr tag)

   ### Usage
   ~~~js
     <Hr />
   ~~~
  `
  )
)

export default undefined
