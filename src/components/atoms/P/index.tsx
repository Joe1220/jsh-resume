import styled, { css } from "styled-components"

export interface IP {
  sm?: boolean
  lg?: boolean
  thick?: boolean
  lightBlack?: boolean
  blue?: boolean
  white?: boolean
  grey?: boolean
  lightGrey?: boolean
  error?: boolean
  overflowing?: boolean
}

export default styled("p")<IP>`
  font-size: ${props => props.theme.fontSize.base};
  font-weight: 500;
  line-height: 2;
  margin: 0;

  ${props =>
    props.thick &&
    css`
      font-weight: 700;
    `}

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
    props.lightBlack &&
    css`
      color: ${props => props.theme.colors.lightBlack};
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
    props.lightGrey &&
    css`
      color: ${props => props.theme.colors.lightGrey};
    `}

  ${props =>
    props.error &&
    css`
      color: ${props => props.theme.colors.error};
    `}

  ${props =>
    props.overflowing &&
    css`
      text-overflow: ellipsis;
      overflow: hidden;
    `}
`
