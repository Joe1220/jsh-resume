import styled from "styled-components"

import { A } from "components/atoms"
import { MailSvg, Github, Facebook, Medium, Tree } from "components/atoms/Svg"
import { ISvg } from "components/atoms/Svg"
import Theme from "config/styles"
import { links } from "config/resume.json"

const StyledSpan = styled("ul")`
  display: flex;

  a {
    &:not(:last-child) {
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

const IconNav: React.SFC<ISvg> = ({ className, color = Theme.colors.white, size }) => {
  return (
    <StyledSpan className={className}>
      <A href={links.mail}>
        <MailSvg size={size} color={color} />
      </A>
      <A href={links.github}>
        <Github size={size} color={color} />
      </A>
      <A href={links.facebook}>
        <Facebook size={size} color={color} />
      </A>
      <A href={links.medium}>
        <Medium size={size} color={color} />
      </A>
      <A href={links.tree}>
        <Tree size={size} color={color} />
      </A>
    </StyledSpan>
  )
}

export default IconNav
