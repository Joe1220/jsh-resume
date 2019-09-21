import React from "react"

import { storiesOf } from "@storybook/react"
import { wInfo } from "../src/utils/storybook"

storiesOf("Welcome", module).add(
  "to your new Storybook🎊",
  () => <div>This is 조승현's(Jo Seung Hyun)resume!</div>,
  wInfo(`
    ### Notes
     This is a Typescript + hooks 조승현's(Jo Seung Hyun)resume!
  `)
)
