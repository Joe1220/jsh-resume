import React from "react"
import { storiesOf } from "@storybook/react"

import IconNav from "./"
import { wInfo } from "utils/storybook"

storiesOf("Components/Molecules", module).add(
  "IconNav",
  () => (
    <>
      <h4>Icon 목록</h4>
      <IconNav color={"black"} />
    </>
  ),
  wInfo(`
  ### Notes

  This is IconNav
  내 정보 관련 url을 나열하는 아이콘 목록

  ### Usage

  ~~~js
    <IconNav />
  ~~~
`)
)
