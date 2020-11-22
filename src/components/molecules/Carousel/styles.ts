import styled from "styled-components"

import { ContainerProps } from "./types"
import { CAROUSEL_SIZE } from "./constants"

export const Container = styled.div<ContainerProps>`
  width: ${(props) => (props.width ? props.width : CAROUSEL_SIZE.width)};
  height: ${(props) => (props.height ? props.height : CAROUSEL_SIZE.height)};
  background: ${(props) => (props.background ? props.background : "black")};
`

export const Img = styled.img`
  width: ${(props) => (props.width ? props.width : CAROUSEL_SIZE.width)};
  height: ${(props) => (props.height ? props.height : CAROUSEL_SIZE.height)};
`
