import styled, { css } from "styled-components"

interface IH1 {
  thick?: boolean
  blue?: boolean
  white?: boolean
  grey?: boolean
  error?: boolean
}

const H1 = styled("h1")<IH1>`
  font-weight: 500;
  font-size: 6.6rem;

  ${props =>
    props.thick &&
    css`
      font-weight: 700;
    `}

  ${props =>
    props.blue &&
    css`
      color: ${props => props.theme.colors.blue};
    `}

  ${props =>
    props.white &&
    css`
      color: ${props => props.theme.colors.white};
    `}

  ${props =>
    props.grey &&
    css`
      color: ${props => props.theme.colors.grey};
    `}

  ${props =>
    props.error &&
    css`
      color: ${props => props.theme.colors.error};
    `}
`

export default H1
