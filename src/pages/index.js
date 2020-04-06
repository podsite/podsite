import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Section, { Left, Right } from "../components/section"
import SEO from "../components/seo"
import styled from "styled-components"
import { usePodState } from "../state"
import { useInView } from "react-intersection-observer"
import ReactAudioPlayer from "react-audio-player"
import Image1 from "../images/section1.jpg"
import Image2 from "../images/section2.jpg"
import Button from "../components/button"
import PriceCard from "../components/priceCard"
import { motion } from "framer-motion"

const IndexPage = () => {
  const podState = usePodState()
  const [ref, inView] = useInView()

  return (
    <Layout>
      <SEO title="Hemsida till din podcast" />
      <Hero />
      <Section />
      <Section anchor="why">
        {/* <div ref={ref}> */}
        <div ref={ref}>
          {inView && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.4,
              }}
            >
              <Left>
                <h2>Varför? Därför.</h2>
                <p>
                  Vi stöter ofta på podcasts med fula hemsidor. Som
                  webbutveklare och podcastfanatiker kände vi att vi hade en bra
                  kombination av kunskap och intresse för att göra någonting åt
                  saken.
                </p>
                <p>
                  Vår lösning är en plattform där du som poddare kan presentera
                  din podd i ett schysst theme, med zero maintenance, top notch
                  SEO och oslagbar hastighet.
                </p>
                <Button>Se våra paket</Button>
              </Left>
              <Right noPadding backgroundImage={Image1}></Right>
            </motion.div>
          )}
        </div>

        {/* </div> */}
      </Section>
      <Section anchor="about" fullWidth backgroundImage={Image2}>
        <h2 style={{ textAlign: "center" }}>Paket</h2>
        <PackageWrapper>
          <PriceCard>
            <h3>Start</h3>
            <ul>
              <li>En simpel hemsida</li>
              <li>Supersnabb</li>
              <li>SEO-optimerad</li>
              <li>Zero maintenance</li>
            </ul>
            <Button>199:- per månad</Button>
          </PriceCard>
          <PriceCard>
            <h3>Grow</h3>
            <ul>
              <li>Blogg</li>
              <li>Rich content</li>
              <li>Analytics</li>
              <li>Social media</li>
            </ul>
            <Button>399:- per månad</Button>
          </PriceCard>
          <PriceCard>
            <h3>Custom</h3>
            <p>Skräddarsydd site efter dina behov</p>
            <Button>Kontakta oss</Button>
          </PriceCard>
        </PackageWrapper>
        <h2 style={{ textAlign: "center" }}>Plugins</h2>
        <PackageWrapper>
          <PriceCard>
            <h3>e-commerce</h3>
            <ul>
              <li>En simpel hemsida</li>
              <li>Supersnabb</li>
              <li>SEO-optimerad</li>
              <li>Zero maintenance</li>
            </ul>
            <Button>199:- per månad</Button>
          </PriceCard>
          <PriceCard>
            <h3>Inspelningskit</h3>
            <ul>
              <li>Mic</li>
              <li>Rich content</li>
              <li>Analytics</li>
              <li>Social media</li>
            </ul>
            <Button>1.500:-</Button>
          </PriceCard>
          <PriceCard>
            <h3>Saknar du något?</h3>
            <p>Skräddarsydd site efter dina behov</p>
            <Button>Kontakta oss</Button>
          </PriceCard>
        </PackageWrapper>
      </Section>
      <Section anchor="frame">
        {podState && podState.title && (
          <>
            <h1>{podState.title}</h1>
            <li>{podState.description}</li>
            <img src={podState.image} alt="hej" />
            {podState.episodes.map(x => (
              <>
                <h2>{x.title}</h2>
                <li>{x.description}</li>
                <li>{x.published}</li>
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

const PackageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;
  margin: 0 auto 100px auto;
  max-width: 1200px;
`
