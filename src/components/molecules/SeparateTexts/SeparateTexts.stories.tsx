import React from "react"
import { storiesOf } from "@storybook/react"
import { text } from "@storybook/addon-knobs"

import SeparateTexts from "./"
import { wInfo } from "utils/storybook"

const example = [
  "Building Facility Architectural Management",
  "건축 시설관리",
  "Jun 2014 - Oct 2014"
]

storiesOf("Components/Molecules", module).add(
  "SeparateTexts",
  () => (
    <>
      <SeparateTexts texts={example} customSeparate={text("separate", "•")} />
    </>
  ),
  wInfo(`
  ### Notes

  This is SeparateTexts
  P 태그를 이용하여 입력받은 문자열을 문자 사이 분할하는 문자 삽입
  default로 &bull;

  ### Usage

  ~~~js
    <SeparateTexts texts={example} />
  ~~~
`)
)
