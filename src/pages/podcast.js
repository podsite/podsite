import React, { useState } from "react"
import axios from "axios"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactAudioPlayer from "react-audio-player"
import { usePodDispatch, usePodState } from "../state"
var parseString = require("xml2js").parseString

const PodcastPage = () => {
  const [xml, setXml] = useState(null)
  const podDispatch = usePodDispatch()
  const podState = usePodState()

  function parseXml() {
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
    axios.get(CORS_PROXY + xml).then(response => {
      parseString(response.data, function(err, res) {
        console.log(res)

        const podcast = {
          title: res.rss.channel[0].title[0],
          description: res.rss.channel[0]["itunes:summary"][0],
          image: res.rss.channel[0]["itunes:image"][0].$.href,
          episodes: res.rss.channel[0].item.slice(0, 9).map(x => {
            const ep = {
              title: x.title[0],
              description: x.description[0],
              published: x.pubDate[0],
              url: x.link[0],
            }
            return ep
          }),
        }
        podDispatch({ type: "set", podcast: podcast })
        console.log(podcast)
      })
      // console.log(res)
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
