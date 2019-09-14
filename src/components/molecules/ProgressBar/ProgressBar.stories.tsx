import React from "react"
import { storiesOf } from "@storybook/react"
import { text } from "@storybook/addon-knobs"

import ProgressBar from "."
import { wInfo } from "utils/storybook"

storiesOf("Components/Molecules", module).add(
  "ProgressBar",
  () => (
    <>
      <ProgressBar percent={"70%"} name={text("name", "JAVASCRIPT")} />
    </>
  ),
  wInfo(`
  ### Notes

  This is a ProgressBar(percantage bar)

  ### Usage
  ~~~js
    <ProgressBar name={"JAVASCRIPT"} percentage={"70%"}>
  ~~~
  `)
)
