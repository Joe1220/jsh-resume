import React from "react"
import { storiesOf } from "@storybook/react"
import { text } from "@storybook/addon-knobs"

import { wInfo } from "utils/storybook"
import PortfolioItem from "./"

const stories = storiesOf("Components/Molecules", module)

stories.add(
  "PortfolioItem",
  () => (
    <>
      <PortfolioItem
        title={text("title", "test")}
        date="2019-07"
        summary={
          "(Toy) socket을 적용한 간단한 web chat toy project입니다. React, Mobx, Koa(NODE), Nginx(EC2), Socket을 사용하였습니다. Styled-Components와 atomic-design, storybook을 사용하여 ui를 구현하였습니다."
        }
        image={{
          modals: [
            "https://images.ctfassets.net/6m9bd13t776q/41NtbE9GNGkCmq2KSkMC6U/0d564b28bcc6ef07e8e6447194974e22/top-7-packaged-baby-foods-2160x1200.jpg?q=75"
          ],
          thumb:
            "https://images.ctfassets.net/6m9bd13t776q/41NtbE9GNGkCmq2KSkMC6U/0d564b28bcc6ef07e8e6447194974e22/top-7-packaged-baby-foods-2160x1200.jpg?q=75"
        }}
        category="React, Mobx, Koa, Styled-Components, Socket.io, Nginx"
        website={"https://github.com/Joe1220/goodParents/"}
      />
    </>
  ),
  wInfo(`
    ### Notes

    This is PortfolioItem 
    protfolio 페이지 내부 각 아이템. 클릭 시 modal 오픈

    ### Usage
    ~~~js
    <PortfolioItem
      title={text("title", "test")}
      subinfo={["react", "javascript"]}
      image={{
        modal:
          "https://images.ctfassets.net/6m9bd13t776q/41NtbE9GNGkCmq2KSkMC6U/0d564b28bcc6ef07e8e6447194974e22/top-7-packaged-baby-foods-2160x1200.jpg?q=75",
        thumb:
          "https://images.ctfassets.net/6m9bd13t776q/41NtbE9GNGkCmq2KSkMC6U/0d564b28bcc6ef07e8e6447194974e22/top-7-packaged-baby-foods-2160x1200.jpg?q=75"
      }}
    />
    ~~~
  `)
)

export default undefined
