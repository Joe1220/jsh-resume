import styled from "styled-components"

import { A } from "components/atoms"
import { MailSvg, Github, Facebook, Medium } from "components/atoms/Svg"
import { ISvg } from "components/atoms/Svg"
import Theme from "config/styles"

const StyledSpan = styled("ul")`
  display: flex;

  a {
    &:not(last-child) {
      margin-right: ${props => props.theme.spaces.xlg};
    }
    path,
    svg {
      transition: fill 0.3s;

      &:hover {
        fill: ${props => props.theme.colors.purpleBlue};
      }
    }
  }
`

const IconNav: React.SFC<ISvg> = ({ color = Theme.colors.white, size }) => {
  return (
    <StyledSpan>
      <A href="mailto: jsh901220@gmail.com">
        <MailSvg size={size} color={color} />
      </A>
      <A href="https://github.com/Joe1220">
        <Github size={size} color={color} />
      </A>
      <A href="https://www.facebook.com/sleep.joe">
        <Facebook size={size} color={color} />
      </A>
      <A href="https://medium.com/@jsh901220">
        <Medium size={size} color={color} />
      </A>
    </StyledSpan>
  )
}

export default IconNav
