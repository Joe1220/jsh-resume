import styled from "styled-components"

import { Img, P } from "components/atoms"

interface IImage {
  modal: string
  thumb: string
}

interface IPortfolioItem {
  title: string
  category: string
  date: string
  website: string
  summary: string
  image: IImage
  width?: string
  height?: string
}

const StyledPortfolioItem = styled("div")`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`

const StyledOverlayContent = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  cursor: pointer;
  padding: ${(props) => props.theme.spaces.base};

  &:hover {
    transition: opacity 1s ease-in-out;
    opacity: 1;
  }
`

const PortfolioItem: React.SFC<IPortfolioItem> = ({ image, date, title, category }) => {
  return (
    <StyledPortfolioItem>
      <StyledOverlayContent>
        <P white thick>
          {title}
        </P>
        <P grey thick sm>
          {date}
        </P>
        <P white sm>
          {category}
        </P>
      </StyledOverlayContent>
      <Img src={image.thumb} alt={title} />
    </StyledPortfolioItem>
  )
}

export default PortfolioItem
