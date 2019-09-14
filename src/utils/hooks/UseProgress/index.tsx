import { useRef, useEffect } from "react"

import Theme from "config/styles"

// width를 percentage로 받아 progress bar 컴포넌트 이펙트
export default ({
  beforeColor = Theme.colors.black,
  afterColor = Theme.colors.purpleBlue,
  percentage
}) => {
  const element = useRef<any>()

  // mouse over시에 적용될 스타일
  const handleProgress = () => {
    const { current } = element
    current.style.transition = `width 1s ease-in-out`
    current.style.width = percentage
  }

  // mouse over시에 적용될 스타일
  const mouseOver = () => {
    const { current } = element
    current.style.transition = `background 0.5s ease-in-out`
    current.style.background = afterColor
  }

  // mouse out 시 적용될 스타일
  const mouseOut = () => {
    const { current } = element
    current.style.transition = `background 0.5s ease-in-out`
    current.style.background = beforeColor
  }

  useEffect(() => {
    const { current } = element
    if (current) {
      handleProgress()
      current.addEventListener("mouseover", mouseOver)
      current.addEventListener("mouseout", mouseOut)
    }

    return () => {
      current.removeEventListener("mouseover", mouseOver)
      current.removeEventListener("mouseout", mouseOut)
    }
  }, [])
  return { ref: element, style: { width: 0, background: beforeColor } }
}
