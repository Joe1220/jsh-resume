import React from "react"
import { storiesOf } from "@storybook/react"

import SkillList from "./"
import { wInfo } from "utils/storybook"
import RESUME from "config/resume.json"

storiesOf("Components/Organisms", module).add(
  "SkillList",
  () => (
    <>
      <h4>글자 목록</h4>
      <SkillList />
    </>
  ),
  wInfo(`
  ### Notes

  This is SkillList
  resume.json 파일 - skills -> skillDetails 를 이용하여 progress bar 렌더링

  ### Usage

  ~~~js
  <SkillList skills={RESUME.skills.skillDetails} />
  ~~~
`)
)
