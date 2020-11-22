import moment from "moment"

const INVALID_TIME = "Invalid date"

// 날짜 정보(2019-01, 2019.01 등등...)입력 시 Jan 2019 로 변환
const dateChangeFormat = (datetime: string) => {
  const d = moment(datetime, "YYYY-MM-DD")

  if (dateMatch(datetime)) return INVALID_TIME
  return d.format("MMM YYYY")
}

// date 유효성 검사
const dateMatch = (dateTime: string) => {
  const dateReg = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
  return dateTime.match(dateReg)
}

// "string으로 받은 날짜정보(ex - 2019-01, 2019-02)를 ,로 분할해 각각 날짜를 변경해 반환"
// 날짜가 아니면 그대로 반환
export const dateChangeFormatList = (dateTime: string) => {
  const dTimes = dateTime.split(",").map((time) => {
    return dateChangeFormat(time.trim())
  })
  return dTimes[0] + " - " + dTimes[1]
}
