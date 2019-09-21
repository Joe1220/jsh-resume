import React from "react"
import { storiesOf } from "@storybook/react"

import Footer from "."
import { wInfo } from "utils/storybook"

storiesOf("Components/Organisms", module).add(
  "Footer",
  () => (
    <>
      <Footer />
    </>
  ),
  wInfo(`
  ### Notes

  This is a Footer

  ### Usage
  ~~~js
    <Footer />
  ~~~
  `)
)
