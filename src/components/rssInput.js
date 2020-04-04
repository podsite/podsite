import React from "react"
import styled from "styled-components"

const RSSInput = () => <Input placeholder="Klistra in din RSS-feed här" />

export default RSSInput

const Input = styled.input`
  font-family: "Baloo 2";
  font-weight: 400;
  font-size: 20px;
  display: block;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 2px solid white;
  padding: 15px 25px;
  width: 400px;
  background-color: transparent;

  &::placeholder {
    color: white;
  }
`
