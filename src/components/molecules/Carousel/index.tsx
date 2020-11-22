import React from "react"
import Carousel from "nuka-carousel"

import { CarouselProps } from "./types"
import { CAROUSEL_SIZE, IMAGES_SAMPLE } from "./constants"
import { Container, Img } from "./styles"

const CarouselComp: React.FC<CarouselProps> = ({
  images = IMAGES_SAMPLE,
  width = CAROUSEL_SIZE.width,
  height = CAROUSEL_SIZE.height
}) => {
  return (
    <Container width={width} height={height}>
      <Carousel>
        {images.map((image, index) => (
          <Img src={image} key={index} width={width} height={height} />
        ))}
      </Carousel>
    </Container>
  )
}

export default CarouselComp
