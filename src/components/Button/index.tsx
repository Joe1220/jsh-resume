import styled, { css } from "styled-components"

interface IButton {
  lg?: boolean
  grey?: boolean
  full?: boolean
  onClick?: (e: any) => void
}

const Button = styled("button")<IButton>`
  display: inline-block;

  border-radius: 0.25rem;
  cursor: pointer;

  &:hover{
    opacity: 0.7;
    transition: all ease-out .45s;
  }

  ${props =>
    props.lg &&
    css`
      font-size: ${props => props.theme.fontSize.lg};
    `}

  ${props =>
    props.grey &&
    css`
      background: ${props => props.theme.colors.grey};
    `}

  ${props =>
    props.full &&
    css`
      width: 100%;
    `}
`

export default Button
