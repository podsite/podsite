import React from "react"
import styled, { css } from "styled-components"

const Section = ({ children, anchor, fullWidth, backgroundImage }) => {
  return (
    <Wrapper
      backgroundImage={backgroundImage}
      fullWidth={fullWidth}
      id={anchor}
    >
      {children}
    </Wrapper>
  )
}

export default Section

const Wrapper = styled.a`
  display: flex;
  min-height: 100vh;
  color: white;
  background-color: #111;

  h2 {
    margin-top: 0;
  }

  ${props =>
    props.fullWidth &&
    `
    display: block;
    padding: 175px 100px;

    @media (max-width: 1200px) {
        padding: 175px 20px;
    }

    @media (max-width: 800px) {
        padding: 175px 20px;
    }
  `}

  ${props =>
    props.backgroundImage &&
    `
        background-image: url(${props.backgroundImage});
        background-size: cover;
        background-position: center;
    `}
`

const RightLeftCommonStyles = css`
  ${props =>
    props.backgroundImage &&
    `
        background-image: url(${props.backgroundImage});
        background-size: cover;
        background-position: center;

        @media (max-width: 800px) {
            display: none;
        }
    `}
`

export const Left = styled.div`
  ${RightLeftCommonStyles}
  flex: 0 0 50%;
  padding: 175px 100px;

  @media (max-width: 1200px) {
    padding: 175px 50px;
  }

  @media (max-width: 800px) {
    padding: 175px 20px;
    flex-basis: 100%;
  }
`

export const Right = styled.div`
  ${RightLeftCommonStyles}
  flex: 0 0 50%;
  padding: 100px;

  ${props =>
    props.noPadding &&
    `
    padding: 0;
  `}
`
