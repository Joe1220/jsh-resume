import { ISvg } from "../"
import Theme from "config/styles"

const Mail: React.SFC<ISvg> = ({ size = Theme.fontSize.xlg, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
    >
      <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
    </svg>
  )
}

export default Mail
