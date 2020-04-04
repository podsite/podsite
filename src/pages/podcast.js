import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactAudioPlayer from "react-audio-player"
import { usePodState } from "../state"

const PodcastPage = () => {
  const podState = usePodState()
  return (
    <Layout>
      <SEO title="Preview" />

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
    </Layout>
  )
}

export default PodcastPage
