import styled, { css } from "styled-components"
import ReactDOM from "react-dom"

import { UseModal } from "utils/hooks"

interface IModalContainer {
  isShow: boolean
}

const StyledModalContainer = styled("div")<IModalContainer>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  padding: ${(props) => props.theme.spaces.base};

  ${(props) =>
    props.isShow &&
    css`
      opacity: 1;
      transition: opacity 1s ease-in-out;
    `}
`

const StyledModalContent = styled("div")`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  min-width: 400px;
  width: 478px;
  background: ${(props) => props.theme.colors.white};
`

/**
 * 전체 modal의 컴포넌트
 * utils -> hooks의 modal hooks로 show를 결정
 * 다른 모달창은 organisms -> modals내에 설정한다.
 */
const ModalContainer = (Component) => ({ children, ...props }) => {
  const { isShow, toggleShow } = UseModal()
  return (
    <>
      <span style={{ cursor: "pointer" }} onClick={toggleShow}>
        {children}
      </span>

      <ModalPortalContent
        Component={Component}
        children={children}
        isShow={isShow}
        toggleShow={toggleShow}
        {...props}
      />
    </>
  )
}

const ModalPortalContent = ({ Component, children, toggleShow, isShow, ...props }) => {
  return isShow
    ? ReactDOM.createPortal(
        <StyledModalContainer isShow={isShow}>
          <StyledModalContent>
            <Component {...props} />
          </StyledModalContent>
        </StyledModalContainer>,
        document.body
      )
    : null
}

export default ModalContainer
