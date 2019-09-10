import styled, { css } from "styled-components"

interface IHr {
  border?: boolean
}

const Hr = styled("hr")<IHr>`
  width: 100%;
  margin: 1rem 2.4rem;
  color: transparent;

  ${props =>
    !props.border &&
    css`
      border: none;
    `}
`

export default ({ border = false }: IHr) => <Hr border={border} />
