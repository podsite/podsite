import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Section, { Left, Right } from "../components/section"
import SEO from "../components/seo"
import styled from "styled-components"
import { usePodState } from "../state"
import ReactAudioPlayer from "react-audio-player"

const IndexPage = () => {
  const podState = usePodState()
  return (
    <Layout>
      <SEO title="Hemsida till din podcast" />
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
        <Lefter>
          <h2>Mindre poddar</h2>
          <Section>
            <Lefter>
              <h3>Start</h3>
              <P>En simpel hemsida</P>
              <P>Supersnabb</P>
              <P>SEO-optimerad</P>
              <P>Zero maintenance</P>
              <P>199:- per månad</P>
            </Lefter>
            <Righter>
              <h3>Grow</h3>
              <P>Blogg</P>
              <P>Rich content</P>
              <P>Analytics</P>
              <P>Social media</P>
              <P>399:- per månad</P>
            </Righter>
          </Section>
        </Lefter>
        <Righter>
          <h2>Större poddar</h2>
          <Section>
            <Lefter>
              <h3>Accelerate</h3>
              <P>E-commerce</P>
              <P>Klarna checkout</P>
              <P>599:- per månad</P>
            </Lefter>
            <Righter>
              <h3>Custom</h3>
              <P>Skräddarsydd site efter dina behov</P>
              <P>Kontakta oss</P>
            </Righter>
          </Section>
        </Righter>
      </Section>
      <Section anchor="frame">
        {podState && podState.title && (
          <>
            <h1>{podState.title}</h1>
            <P>{podState.description}</P>
            <img src={podState.image} alt="hej" />
            {podState.episodes.map(x => (
              <>
                <h2>{x.title}</h2>
                <P>{x.description}</P>
                <P>{x.published}</P>
                <ReactAudioPlayer src={x.url} autoPlay={false} controls />
              </>
            ))}
          </>
        )}
      </Section>
    </Layout>
  )
}

export default IndexPage

const Lefter = styled.div`
  flex: 1 1 50%;
  padding: 5px;
`
const Righter = styled.div`
  flex: 1 1 50%;
  padding: 5px;
`
export const P = styled.p`
  padding: 0px;
`
