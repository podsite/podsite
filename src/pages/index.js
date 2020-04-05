import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Section, { Left, Right } from "../components/section"
import SEO from "../components/seo"
import { usePodState } from "../state"
import ReactAudioPlayer from "react-audio-player"

const IndexPage = () => {
  const podState = usePodState()
  return (
    <Layout>
      <SEO title="Lyft din podd" />
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
          <h2>Mindre poddar</h2>
          <Section>
            <Left>
              <h3>Start</h3>
              <p>En simpel hemsida</p>
              <p>Supersnabb</p>
              <p>SEO-optimerad</p>
              <p>Zero maintenance</p>
              <p>199:- per månad</p>
            </Left>
            <Right>
              <h3>Grow</h3>
              <p>Blogg</p>
              <p>Rich content</p>
              <p>Analytics</p>
              <p>Social media</p>
              <p>399:- per månad</p>
            </Right>
          </Section>
        </Left>
        <Right>
          <h2>Större poddar</h2>
          <Section>
            <Left>
              <h3>Accelerate</h3>
              <p>E-commerce</p>
              <p>Klarna checkout</p>
              <p>599:- per månad</p>
            </Left>
            <Right>
              <h3>Custom</h3>
              <p>Skräddarsydd site efter dina behov</p>
              <p>Kontakta oss</p>
            </Right>
          </Section>
        </Right>
      </Section>
      <Section anchor="frame">
        {podState && podState.title && (
          <>
            <h1>{podState.title}</h1>
            <p>{podState.description}</p>
            <img src={podState.image} alt="hej" />
            {podState.episodes.map(x => (
              <>
                <h2>{x.title}</h2>
                <p>{x.description}</p>
                <p>{x.published}</p>
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
