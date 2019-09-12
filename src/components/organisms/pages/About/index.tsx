import { LabelTemplate } from "components/templates"
import { Icon } from "components/atoms"
import { InfoGroup } from "components/organisms"
import Theme from "config/styles"

const subInfo1 = ["web frontend engineer"]
const summaries1 = ["프론트엔트(React, React-Native) 전체 담당", "일부 백엔드 api 개발 및 유지보수"]

const subInfo2 = ["Seoul, Republic Of Korea", "서울 특별시 관악구 신림동 1573-34"]
const summaries2 = ["joe1220@daum.net", "+82 (0)10 8963 4207"]

const Home: React.SFC = () => {
  return (
    <LabelTemplate bgColor={Theme.colors.lightBlack} id="ABOUT">
      <div className="first-column">
        <Icon
          isborder
          alt="my picture"
          width="8.5rem"
          height="8.5rem"
          src="https://avatars1.githubusercontent.com/u/30386090?s=400&u=dc6e2b08f3f672e7614a8b483f000acd0f047a43&v=4"
        />
      </div>
      <div className="last-column">
        <InfoGroup reverse title="About Me" subInfo={subInfo1} summaries={summaries1} />
        <InfoGroup
          reverse
          title="Contact Details"
          subInfo={subInfo2}
          summaries={summaries2}
          firstCustomSeparate="/"
        />
      </div>
    </LabelTemplate>
  )
}

export default Home
