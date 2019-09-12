import React from "react"
import { storiesOf } from "@storybook/react"
import { text } from "@storybook/addon-knobs"

import PList from "./"
import { wInfo } from "utils/storybook"

const example = ["test1", "test2", "test3"]

storiesOf("Components/Molecules", module).add(
  "PList",
  () => (
    <>
      <h4>글자 목록</h4>
      <PList texts={example} customSeparate={text("separate", "")} />
    </>
  ),
  wInfo(`
  ### Notes

  This is PList
  P atom component 를 이용하여 문자열 렌더링

  ### Usage

  ~~~js
    <PList texts={example} customSeparate={text("separate", "")} />
  ~~~
`)
)
