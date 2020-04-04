import React from "react"
import styled from "styled-components"

const Section = ({ children, anchor }) => {
  return <Wrapper id={anchor}>{children}</Wrapper>
}

export default Section

const Wrapper = styled.a`
  display: flex;
  height: 100vh;

  h2 {
    margin-top: 0;
  }
`

export const Left = styled.div`
  flex: 1 1 50%;
  padding: 100px;
`

export const Right = styled.div`
  flex: 1 1 50%;
  padding: 100px;
`
