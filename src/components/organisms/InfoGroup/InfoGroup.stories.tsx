import React from "react"
import { storiesOf } from "@storybook/react"

import InfoGroup from "./"
import { wInfo } from "utils/storybook"

const example = {
  title: "title",
  subInfo: ["web engineer, frontend 개발자"],
  summaries: ["프론트엔트 전체 담당", "일부 백엔드 유지보수"],
  reverse: false,
  bottomLine: false
}

storiesOf("Components/Organisms", module).add(
  "InfoGroup",
  () => (
    <>
      <h4>글자 목록</h4>
      <InfoGroup {...example} />
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
