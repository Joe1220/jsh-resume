import { useRef, useEffect } from "react"

// mouse over 시에 색상 변경
export default (beforeColor = "black", afterColor = "white") => {
  const element = useRef<any>()

  // mouse over시에 적용될 스타일
  const mouseOver = () => {
    const { current } = element
    current.style.transition = `color 1s ease-in-out`
    current.style.color = afterColor
  }

  // mouse out 시 적용될 스타일
  const mouseOut = () => {
    const { current } = element
    current.style.transition = `color 1s ease-in-out`
    current.style.color = beforeColor
  }

  useEffect(() => {
    const { current } = element
    if (current) {
      current.addEventListener("mouseover", mouseOver)
      current.addEventListener("mouseout", mouseOut)
    }

    return () => {
      current.removeEventListener("mouseover", mouseOver)
      current.removeEventListener("mouseout", mouseOut)
    }
  }, [])
  if (typeof beforeColor !== "string" || typeof afterColor !== "string") {
    return
  }
  return { ref: element, style: { color: beforeColor } }
}
