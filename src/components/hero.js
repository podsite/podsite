import React from "react"
import styled from "styled-components"
import Image from "../images/pod_bg.jpg"
import { AiOutlineDownCircle } from "react-icons/ai"
import RSSInput from "./rssInput"

const Hero = () => (
  <Wrapper>
    <Inner>
      <h1>Byggt av poddare, för poddare</h1>
      <p>Ge din podcast ett nytt ansikte.</p>
      <RSSInput />
      <Button>Tjuvkolla</Button>
    </Inner>
    <a href="#why">
      <StyledAiOutlineDownCircle />
    </a>
  </Wrapper>
)

export default Hero

const Wrapper = styled.div`
  background-color: #4282b9;
  background: url(${Image});
  background-size: cover;
  background-position: center;
  color: white;
  height: 100vh;
  overflow: hidden;
  padding: 0 100px;
  position: relative;
`

const Inner = styled.div`
  padding-top: 180px;
`

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

const Button = styled.button`
  padding: 7px 25px 5px 25px;
  font-size: 26px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 3px solid white;
  border-radius: 10px;
  font-family: "Baloo 2";
  font-weight: 800;
  cursor: pointer;
  background-color: white;
  color: #f7b6b4;
  transition: background-color 50ms ease-in;

  &:hover {
    color: white;
    background-color: transparent;
  }
`
const StyledAiOutlineDownCircle = styled(AiOutlineDownCircle)`
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 100px;
  transition: transform 100ms ease-in-out;
  cursor: pointer;
  color: white;

  &:hover {
    transform: translate(-50%, 10px);
  }
`
