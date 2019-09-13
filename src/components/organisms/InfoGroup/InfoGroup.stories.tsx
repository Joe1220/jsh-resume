import React from "react"
import { storiesOf } from "@storybook/react"

import InfoGroup from "./"
import { wInfo } from "utils/storybook"
import RESUME from "config/resume.json"

storiesOf("Components/Organisms", module).add(
  "InfoGroup",
  () => (
    <>
      <h4>글자 목록</h4>
      <InfoGroup infos={RESUME.work} />
    </>
  ),
  wInfo(`
  ### Notes

  This is PList
  P atom component 를 이용하여 문자열 렌더링

  ### Usage

  ~~~js
    <PList />
  ~~~
`)
)
