/**
 * width, height: ex) 100px
 * background: 'black'
 */
export type ContainerProps = {
  width?: string
  height?: string
  background?: string
}

export type CarouselProps = ContainerProps & {
  images?: string[]
}
