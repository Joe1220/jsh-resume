import styled, { css } from "styled-components"

interface ILabel {
  sm?: boolean
  lg?: boolean
  xlg?: boolean
  blue?: boolean
  white?: boolean
  thick?: boolean
}

const StyledLabel = styled("label")<ILabel>`
  display: block;
  font-size: ${props => props.theme.fontSize.base};
  font-weight: 500;
  color: ${props => props.theme.colors.black};
  margin-bottom: ${props => props.theme.spaces.sm};

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
    
  ${props =>
    props.xlg &&
    css`
      font-size: ${props => props.theme.fontSize.xlg};
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
    props.thick &&
    css`
      font-weight: 700;
    `}

`

export default StyledLabel
