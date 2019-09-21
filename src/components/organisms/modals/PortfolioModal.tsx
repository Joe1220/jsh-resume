import styled, { css } from "styled-components"

import { Img, P, A } from "components/atoms"
import { Tag } from "components/atoms/Svg"
import { ModalContainer } from "components/organisms"
import { UseColorChange } from "utils/hooks"
import Theme from "config/styles"

interface IImage {
  modal: string
  thumb: string
}

interface IPortfolioModal {
  title: string
  category: string
  date: string
  website: string
  github?: string
  summary: string
  image: IImage
  width?: string
  height?: string
}

interface IStlyeldPortfolioModalContent {
  footer?: boolean
}

const StlyeldPortfolioModal = styled("div")`
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`

const StlyeldPortfolioModalContent = styled("div")<IStlyeldPortfolioModalContent>`
  padding: ${props => props.theme.spaces.lg};

  svg {
    display: inline;
    margin-right: ${props => props.theme.spaces.base};
  }

  ${props =>
    props.footer &&
    css`
      display: flex;
      flex-direction: row;
      background: ${props => props.theme.colors.black};
      & > a {
        margin-right: ${props => props.theme.spaces.lg};
      }
    `}
`

const PortfolioItem: React.SFC<IPortfolioModal> = ({
  image,
  title,
  summary,
  category,
  website,
  github
}) => {
  const useColorChange = UseColorChange(Theme.colors.white, Theme.colors.purpleBlue)
  return (
    <StlyeldPortfolioModal>
      <StlyeldPortfolioModalContent>
        <Img src={image.modal} alt={title} width="100%" height="auto" />
      </StlyeldPortfolioModalContent>
      <StlyeldPortfolioModalContent>
        <P lg thick>
          {title}
        </P>
        <P lightGrey sm>
          {summary}
        </P>
      </StlyeldPortfolioModalContent>
      <StlyeldPortfolioModalContent>
        <Tag size="0.8rem" />
        <P sm lightBlack>
          {category}
        </P>
      </StlyeldPortfolioModalContent>
      <StlyeldPortfolioModalContent footer>
        <A sm href={website} {...useColorChange}>
          DETAILS
        </A>
        {github && (
          <A sm href={github} {...useColorChange}>
            CODE
          </A>
        )}
      </StlyeldPortfolioModalContent>
    </StlyeldPortfolioModal>
  )
}

export default ModalContainer(PortfolioItem)
