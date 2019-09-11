import moment from "moment"

// 날짜 정보(2019-01, 2019.01 등등...)입력 시 Jan 2019 로 변환
export const dateChangeFormat = (datetime: string) => {
  const d = moment(datetime, "YYYY-MM-DD")

  if (dateMatch(datetime)) return "invalid time"

  return d.format("MMM YYYY")
}

// date 유효성 검사
export const dateMatch = (dateTime: string) => {
  const dateReg = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
  return dateTime.match(dateReg)
}
