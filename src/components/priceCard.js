import React from "react"
import styled from "styled-components"

const PriceCard = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default PriceCard

const Wrapper = styled.div`
  padding: 20px;
  background-color: #111;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  button {
    margin-top: auto;
  }
`
