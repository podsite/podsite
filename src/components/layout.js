import React from "react"
import { createGlobalStyle } from "styled-components"
import Header from "./header"

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
}

html {
  scroll-behavior: smooth;
}

h1 {
    font-size: 60px;
    font-family: "Baloo 2";
    font-weight: 700;
    line-height: 60px;
  }

  p {
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
