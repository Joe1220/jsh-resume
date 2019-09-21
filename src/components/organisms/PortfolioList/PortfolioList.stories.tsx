import React from "react"
import { storiesOf } from "@storybook/react"

import PortfolioList from "./"
import { wInfo } from "utils/storybook"

storiesOf("Components/Organisms", module).add(
  "PortfolioList",
  () => (
    <div>
      <h4>포트폴리오 리스트</h4>
      <PortfolioList />
    </div>
  ),
  wInfo(`
  ### Notes

  This is PortfolioList
  resume.json 파일 - portfolio 를 이용하여 progress bar 렌더링

  ### Usage

  ~~~js
  <PortfolioList />
  ~~~
`)
)
