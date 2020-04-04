import React, { useState, useEffect } from "react"
import axios from "axios"
import Layout from "../components/layout"
import SEO from "../components/seo"
import XMLParser from "react-xml-parser"
import ReactAudioPlayer from "react-audio-player"

import { usePodDispatch, usePodState } from "../state"

const PodcastPage = () => {
  const [xml, setXml] = useState(null)
  const podDispatch = usePodDispatch()
  const podState = usePodState()

  useEffect(() => {
    console.log(podState)
  }, [podState])

  function parseXml() {
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
    axios.get(CORS_PROXY + xml).then(response => {
      const res = new XMLParser().parseFromString(response.data)
      console.log(res)

      const podcast = {
        title: res.children[0].children.find(x => x.name === "title").value,
        description: res.children[0].children.find(
          x => x.name === "description"
        ).value,
        image: res.children[0].children
          .find(x => x.name === "image")
          .children.find(x => x.name === "url").value,
        episodes: res.children[0].children
          .filter(x => x.name === "item")
          .slice(0, 9)
          .map(x => {
            const ep = {
              title: x.children.find(x => x.name === "title").value,
              description: x.children.find(x => x.name === "description").value,
              published: x.children.find(x => x.name === "pubDate").value,
              url: x.children.find(x => x.name === "link").value,
              duration: x.children.find(x => x.name === "itunes:duration")
                .value,
            }
            return ep
          }),
      }
      podDispatch({ type: "set", podcast: podcast })
      console.log(podcast)
    })
  }
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Klistra in din rss-feed nedan</h1>
      <input
        id="podcast"
        value={xml || ""}
        onChange={e => setXml(e.target.value)}
        type="text"
      />
      <button onClick={() => parseXml()}>Save</button>

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
