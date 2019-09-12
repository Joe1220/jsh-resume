import styled from "styled-components"

import { Label, Hr } from "components/atoms"
import { PList, SeparateTexts } from "components/molecules"
import { ubInfoLastIndexChange } from "utils/date"

interface IInfoGroup {
  title: string
  subInfo: string[]
  summaries: string[]
  reverse?: boolean
  bottomLine?: boolean
  date?: string
  firstCustomSeparate?: string
  secondCustomSeparate?: string
}

const StyledInfoGroup = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

/**
 * @param reverse `reverse가 참일 시, 글씨 색상이 변경`
 * @param subInfo `title 밑 하단 간략 정보(work section 일 경우 position, summary, 날짜 표기)를 배열로 표기. 3개 항목으로 제한`
 * `이 때 3번째 배열 내용은 날짜로, format 변형을 함.`
 * @param bottomLine `true 일 시 하단 줄 생성(분리 줄)`
 * @param summaries `디테일한 정보의 배열`
 */
const InfoGroup: React.SFC<IInfoGroup> = ({
  title = "title",
  subInfo = ["web engineer, frontend 개발자"],
  summaries = ["프론트엔트(React, React-Native) 전체 담당", "일부 백엔드 api 개발 및 유지보수"],
  date,
  reverse,
  firstCustomSeparate,
  secondCustomSeparate,
  bottomLine
}) => {
  const customInfo = date ? ubInfoLastIndexChange(subInfo) : subInfo
  return (
    <StyledInfoGroup>
      <Label lg thick white={reverse}>
        {title}
      </Label>
      <SeparateTexts
        texts={customInfo}
        lightGrey={reverse}
        lightBlack={!reverse}
        customSeparate={firstCustomSeparate}
      />
      <PList
        texts={summaries}
        grey={reverse}
        lightBlack={!reverse}
        customSeparate={secondCustomSeparate}
      />
      {bottomLine && <Hr />}
    </StyledInfoGroup>
  )
}

export default InfoGroup
