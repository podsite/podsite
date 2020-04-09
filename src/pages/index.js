import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Section, { Left, Right } from "../components/section"
import SEO from "../components/seo"
import styled from "styled-components"
import { usePodState } from "../state"
import ReactAudioPlayer from "react-audio-player"
import Image1 from "../images/section1.jpg"
import Image2 from "../images/section2.jpg"
import Button from "../components/button"
import PriceCard from "../components/priceCard"
import { motion } from "framer-motion"
import IO from "../components/io"

const IndexPage = () => {
  const podState = usePodState()

  return (
    <Layout>
      <SEO title="Hemsida till din podcast" />
      <Hero />
      <Section anchor="about">
        <IO>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.4,
            }}
          >
            <Left>
              <h2>Du ger din podcast en röst.</h2>
              <p>Vi ger den ett ansikte på nätet.</p>
              <p>Bra poddar finns inte bara där poddar finns.</p>
              <Button>Se våra produkter</Button>
            </Left>
          </motion.div>
        </IO>
        <Right noPadding backgroundImage={Image1}></Right>
      </Section>
      <Section anchor="products" fullWidth backgroundImage={Image2}>
        <IO>
          <h2 style={{ textAlign: "center" }}>Produkter</h2>
          <PackageWrapper>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.4,
              }}
            >
              <PriceCard>
                <h3>Startup</h3>
                <h4>Enkelt och snyggt.</h4>
                <h4>din-podd.podbase.se</h4>
                <ul>
                  <li>Drivs av din rss-feed</li>
                  <li>Supersnabb</li>
                  <li>SEO-optimerad</li>
                  <li>Zero maintenance</li>
                </ul>
                <Button>49:- per månad</Button>
              </PriceCard>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.4,
              }}
            >
              <PriceCard>
                <h3>Advanced</h3>
                <h4>Ta din podcast till nästa nivå.</h4>
                <h4>www.din-podd.se</h4>
                <ul>
                  <li>Blogg</li>
                  <li>Landing pages</li>
                  <li>E-handel</li>
                  <li>Nyhetsbrev</li>
                </ul>
                <Button>fr 799:- per månad</Button>
              </PriceCard>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.4,
              }}
            >
              <PriceCard>
                <h3>Podcaster Kit</h3>
                <h4>Beprövat och pålitligt.</h4>
                <h4>Prisvärt för den nya poddaren.</h4>
                <ul>
                  <li>Mega Mic X2000</li>
                  <li>Amiga Soundboard X</li>
                  <li>Stativ</li>
                  <li>Support</li>
                </ul>
                <Button>1799:-</Button>
              </PriceCard>
            </motion.div>
          </PackageWrapper>
        </IO>
      </Section>
      <Section anchor="#demo">
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
  align-items: center;
  justify-items: center;
  grid-gap: 50px;
  margin: 0 auto 100px auto;
  max-width: 1200px;
`
