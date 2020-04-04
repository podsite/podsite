import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Section, { Left, Right } from "../components/section"

const IndexPage = () => (
  <Layout>
    <Hero />
    <Section anchor="why">
      <Left>
        <h2>asd</h2>
      </Left>
      <Right>123</Right>
    </Section>
    <Section anchor="how">
      <Left>
        <h2>asd</h2>
      </Left>
      <Right>123</Right>
    </Section>
    <Section anchor="about">
      <Left>
        <h2>asd</h2>
      </Left>
      <Right>123</Right>
    </Section>
  </Layout>
)

export default IndexPage
