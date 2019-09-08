import { useRef, useEffect } from "react"

// mouse over 시에 fade out 이펙트
export default (duration = 1, delay = 0) => {
  const element = useRef<any>()

  // mouse over시에 적용될 스타일
  const mouseOver = () => {
    const { current } = element
    current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`
    current.style.opacity = 0.1
  }

  // mouse out 시 적용될 스타일
  const mouseOut = () => {
    const { current } = element
    current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`
    current.style.opacity = 1
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
  if (typeof duration !== "number" || typeof delay !== "number") {
    return
  }
  return { ref: element, style: { opacity: 1 } }
}
