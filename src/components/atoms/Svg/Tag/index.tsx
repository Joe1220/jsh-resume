import { ISvg } from "../"
import Theme from "config/styles"

const Tag: React.SFC<ISvg> = ({ size = Theme.fontSize.xlg, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
    >
      <path d="M6.56 4.438c.585.586.585 1.539.001 2.123-.285.283-.661.439-1.061.439s-.777-.156-1.06-.438c-.585-.586-.586-1.538-.001-2.123.284-.283.661-.439 1.062-.439.4 0 .776.156 1.059.438zm17.44 8.958l-10.609 10.604-13.391-13.391v-10.609h10.605l13.395 13.396zm-16.732-9.665c-.488-.487-1.127-.731-1.767-.731-.641 0-1.28.244-1.769.732-.977.976-.977 2.558 0 3.536.489.488 1.128.732 1.768.732s1.279-.244 1.768-.733c.976-.976.976-2.558 0-3.536z"/>
    </svg>
  )
}

export default Tag