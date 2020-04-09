import React, { useState } from "react"
import styled from "styled-components"
import Logo from "../images/logo.svg"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { Link } from "gatsby"
import { TiThMenu } from "react-icons/ti"
import { IoIosCloseCircle } from "react-icons/io"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useScrollPosition(({ currPos }) => {
    currPos.y > -150 ? setIsScrolled(false) : setIsScrolled(true)
  })

  const toggleMobileMenu = state => {
    setMobileMenuOpen(state)
  }

  return (
    <Wrapper isScrolled={isScrolled} mobileMenuOpen={mobileMenuOpen}>
      <Link to="/" style={{ display: "flex" }}>
        <StyledLogo src={Logo} />
      </Link>
      <Menu>
        <a onClick={() => toggleMobileMenu(false)} href="#about">
          #products
        </a>
        <a onClick={() => toggleMobileMenu(false)} href="#">
          #about
        </a>
        <a onClick={() => toggleMobileMenu(false)} href="#why">
          #demo
        </a>
      </Menu>
      {mobileMenuOpen ? (
        <>
          <CloseMenuButton onClick={() => toggleMobileMenu(false)} />
          <MobileMenu>
            <a onClick={() => toggleMobileMenu(false)} href="#about">
              #products
            </a>
            <a onClick={() => toggleMobileMenu(false)} href="#">
              #about
            </a>
            <a onClick={() => toggleMobileMenu(false)} href="#why">
              #demo
            </a>
          </MobileMenu>
        </>
      ) : (
        <OpenMenuButton onClick={() => toggleMobileMenu(true)} />
      )}
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
  padding: 30px 80px;
  transition: 300ms background-color ease-in-out;

  @media (max-width: 800px) {
    padding: 20px 20px;
  }

  ${props =>
    props.isScrolled &&
    `
    background-color: #000000d1;
  `}

  ${props =>
    props.mobileMenuOpen &&
    `
    background-color: #000000;
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
  padding-left: 80px;

  @media (max-width: 800px) {
    display: none;
  }
`

const MobileMenu = styled.nav`
  position: absolute;
  left: 0;
  top: 100%;
  bottom: 0;
  right: 0;
  background-color: #000000;
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  a {
    padding: 30px 0;
    font-size: 40px;
  }
`
const OpenMenuButton = styled(TiThMenu)`
  color: white;
  font-size: 50px;
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  padding-right: 20px;

  @media (max-width: 800px) {
    display: flex;
  }
`

const CloseMenuButton = styled(IoIosCloseCircle)`
  color: white;
  font-size: 50px;
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  padding-right: 20px;

  @media (max-width: 800px) {
    display: flex;
  }
`

const StyledLogo = styled.img``
