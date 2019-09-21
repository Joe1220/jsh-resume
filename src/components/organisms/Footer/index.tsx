import styled from "styled-components"

import { IconNav } from "components/molecules"
import { A, Link } from "components/atoms"
import { UpArrow } from "components/atoms/Svg"
import Theme from "config/styles"
import { basics } from "config/resume.json"

const StlyedContainer = styled("div")`
  position: relative;
  background: ${props => props.theme.colors.black};
  padding: ${props => props.theme.spaces.resumeSectionPadding};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  & > a {
    position: absolute;
    top: -20px;
    background: transparent;
  }

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${props => props.theme.colors.lightGrey};
    margin-top: ${props => props.theme.spaces.lg};
    a {
      color: ${props => props.theme.colors.white};
      font-size: 1rem;
      margin-left: ${props => props.theme.spaces.base};
    }
  }
`

const StlyedIconNav = styled(IconNav)`
  a {
    &:not(:last-child) {
      margin-right: ${props => props.theme.spaces.xlg};
    }
    path,
    svg {
      fill: ${props => props.theme.colors.lightGrey};
      transition: fill 0.3s;

      &:hover {
        fill: ${props => props.theme.colors.purpleBlue};
      }
    }
  }
`

const Footer = () => {
  return (
    <StlyedContainer>
      <Link href="#HOME">
        <UpArrow color={Theme.colors.lightGrey} />
      </Link>
      <StlyedIconNav />
      <span>
        This site is developed in React.js by <A href={basics.github}>Jo Seung Hyun</A>
      </span>
    </StlyedContainer>
  )
}

export default Footer
