import styled, { css } from "styled-components"

import Theme from "config/styles"

export interface IImg {
  src: string
  width?: string
  height?: string
  alt: string
  isborder?: boolean
}

const StyledImg = styled("img")<IImg>`
  width: ${props => props.width};
  height: ${props => props.height};
  border: none;
  background: inherit;

  ${props =>
    props.isborder &&
    css`
      border-radius: 100%;
    `}
`

StyledImg.defaultProps = {
  width: Theme.iconSize.xxlg,
  height: Theme.iconSize.xxlg
}

export default StyledImg
