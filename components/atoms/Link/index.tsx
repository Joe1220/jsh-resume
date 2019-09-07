import styled, { css } from "styled-components"
import Link from "next/link"

interface IAProps {
  fontSize?: string
  sm?: boolean
  lg?: boolean
}

interface ILinkProps {
  href: string
  as?: string
  children: React.ReactChild
  fontSize?: string
  sm?: boolean
  lg?: boolean
}

const StyledLink = styled("a")<IAProps>`
  font-size: ${props => props.theme.fontSize.lg};
  font-weight: 700;
  color: ${props => props.theme.colors.black};
  text-decoration: none;
  background: inherit;
  box-sizing: border-box;
  display: block;

  &:hover {
    text-decoration: underline;
  }

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

const CustomLink: React.SFC<ILinkProps> = ({ href, as, children, ...props }) => {
  return (
    <Link href={href} as={as}>
      <StyledLink {...props}>{children}</StyledLink>
    </Link>
  )
}

export default CustomLink
