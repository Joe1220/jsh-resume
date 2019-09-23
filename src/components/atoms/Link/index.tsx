import styled, { css } from "styled-components"
import Link from "next/link"

import { UseColorChange } from "utils/hooks"
import Theme from "config/styles"

interface IAProps {
  fontSize?: string
  sm?: boolean
  lg?: boolean
}

interface ILinkProps {
  href: string
  as?: string
  className?: string
  children: React.ReactChild
  fontSize?: string
  sm?: boolean
  lg?: boolean
}

const StyledLink = styled("a")<IAProps>`
  font-size: ${props => props.theme.fontSize.base};
  font-weight: 500;
  color: ${props => props.theme.colors.black};
  text-decoration: none;
  background: inherit;
  box-sizing: border-box;
  display: block;
  cursor: pointer;

  ${props =>
    props.sm &&
    css`
      font-size: ${props => props.theme.fontSize.sm};
    `}

  ${props =>
    props.lg &&
    css`
      font-size: ${props => props.theme.fontSize.lg};
    `}
`

const CustomLink: React.SFC<ILinkProps> = ({ href, as, className, children, ...props }) => {
  const useColorChange = UseColorChange(Theme.colors.white, Theme.colors.purpleBlue)
  return (
    <Link href={href} as={as}>
      <StyledLink {...props} {...useColorChange} className={className}>
        {children}
      </StyledLink>
    </Link>
  )
}

export default CustomLink
