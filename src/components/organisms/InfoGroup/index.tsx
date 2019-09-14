import styled from "styled-components"

import { Label, Hr, A } from "components/atoms"
import { PList, SeparateTexts } from "components/molecules"
import { dateChangeFormatList } from "utils/date"

interface IInfoGroup {
  title: string
  website?: string
  subInfo?: string[]
  summaries: string[]
  bottomLine?: boolean
  date?: string
  firstCustomSeparate?: string
  secondCustomSeparate?: string
}

interface IInfoGroups {
  infos: IInfoGroup[]
  firstCustomSeparate?: string
  secondCustomSeparate?: string
  bottomLine?: boolean
}

const StyledInfoGroup = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  div {
    &:not(:last-child) {
      margin-bottom: ${props => props.theme.spaces.xlg};
    }
  }
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
  website = "https://www.psa-ict.co.kr/main/main.psa",
  subInfo,
  summaries = ["프론트엔트(React, React-Native) 전체 담당", "일부 백엔드 api 개발 및 유지보수"],
  date,
  firstCustomSeparate,
  secondCustomSeparate,
  bottomLine
}) => {
  const customInfo = date && subInfo ? [...subInfo, dateChangeFormatList(date)] : subInfo
  return (
    <div>
      {website ? (
        <A href={website}>
          <Label lg thick>
            {title}
          </Label>
        </A>
      ) : (
        <Label lg thick>
          {title}
        </Label>
      )}
      {subInfo && <SeparateTexts texts={customInfo} customSeparate={firstCustomSeparate} />}
      <PList texts={summaries} customSeparate={secondCustomSeparate} />
      {bottomLine && <Hr />}
    </div>
  )
}

const InfoGroups: React.SFC<IInfoGroups> = ({ infos, ...props }) => {
  return (
    <StyledInfoGroup>
      {infos.map(info => (
        <InfoGroup {...info} {...props} />
      ))}
    </StyledInfoGroup>
  )
}

export default InfoGroups
