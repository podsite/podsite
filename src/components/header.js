import React, { useState } from "react"
import styled from "styled-components"
import Logo from "../images/logo.svg"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useScrollPosition(({ currPos }) => {
    currPos.y > -150 ? setIsScrolled(false) : setIsScrolled(true)
    console.log(currPos.y, isScrolled)
  })

  return (
    <Wrapper isScrolled={isScrolled}>
      <StyledLogo src={Logo} />
      <Menu>
        <a href="#why">#varför</a>
        <a href="#how">#hur</a>
        <a href="#about">#om</a>
      </Menu>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
  position: fixed;
  z-index: 1;
  display: flex;
  width: 100%;
  align-items: center;
  /* justify-content: space-around; */
  padding: 30px 80px;
  transition: 300ms background-color ease-in-out;

  ${props =>
    props.isScrolled &&
    `
    background-color: #000000d1;
  `}

  a {
    font-family: "Baloo 2";
    font-weight: 700;
    color: white;
    text-decoration: none;
    margin-right: 20px;
    font-size: 28px;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Menu = styled.nav`
  position: absolute;
  left: 50%;
`

const StyledLogo = styled.img``
