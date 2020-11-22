import { useState, useEffect } from "react"

// toggle 로 modal창 열고 닫기
export default () => {
  const [isShow, setIsShow] = useState(false)

  const toggleShow = () => {
    setIsShow(!isShow)
  }

  const closeModal = () => {
    setIsShow(false)
  }

  return { isShow, toggleShow, closeModal }
}
