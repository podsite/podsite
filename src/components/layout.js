import React from "react"
import { createGlobalStyle } from "styled-components"
import Header from "./header"

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  overflow-x: hidden;
}

html {
  scroll-behavior: smooth;
}

h1, h2, h3, h4 {
  font-family: "Baloo 2";
  font-weight: 700;
}

h1 {
  font-size: 60px;
  line-height: 60px;

  @media (max-width: 800px) {
    font-size: 40px;
    line-height: 40px;
  }
}

h2 {
  font-size: 50px;
  line-height: 50px;

  @media (max-width: 800px) {
    font-size: 35px;
    line-height: 35px;
  }
}

h3 {
  font-size: 40px;
  line-height: 40px;

  @media (max-width: 800px) {
    font-size: 30px;
    line-height: 30px;
  }
}

h4 {
  font-size: 20px;
  line-height: 20px;
}

p {
  font-size: 26px;
  margin-bottom: 100px;
  font-family: "Merriweather";
  font-weight: 400;

  @media (max-width: 800px) {
    font-size: 24px;
    margin-bottom: 60px;
  }
}

ul {
  font-size: 26px;
  margin-bottom: 100px;
  font-family: "Merriweather";
  font-weight: 400;
}
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
    </>
  )
}

export default Layout
