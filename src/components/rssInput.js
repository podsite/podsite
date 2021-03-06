import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { usePodDispatch } from "../state"
import { navigate } from "gatsby"
import axios from "axios"
import { Spinner } from "@theme-ui/components"
import Button from "./button"
var parseString = require("xml2js").parseString

const RSSInput = () => {
  const [xml, setXml] = useState(null)
  const [loading, setLoading] = useState(false)
  const podDispatch = usePodDispatch()

  useEffect(() => {
    parseXml("https://feed.pod.space/filipandfredrik")
  }, [])

  function parseXml(feed) {
    setLoading(true)
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
    axios
      .get(CORS_PROXY + feed)
      .then(response => {
        if (response.status === 200) {
          parseString(response.data, function(err, res) {
            const podcast = {
              title: res.rss.channel[0].title[0],
              description: res.rss.channel[0]["itunes:summary"][0],
              image: res.rss.channel[0]["itunes:image"][0].$.href,
              episodes: res.rss.channel[0].item.slice(0, 9).map(x => {
                const ep = {
                  title: x.title[0],
                  description: x.description[0],
                  published: x.pubDate[0],
                  url: x.enclosure[0].$.url,
                }

                return ep
              }),
            }
            podDispatch({ type: "set", podcast: podcast })
            setLoading(false)
            navigate("#frame")
          })
        } else {
          setLoading(false)
        }
      })
      .catch(() => setLoading(false))
  }
  return (
    <>
      <Input
        placeholder="Klistra in din RSS-feed här"
        id="podcast"
        value={xml || ""}
        onChange={e => setXml(e.target.value)}
        type="text"
      />
      {loading ? (
        <Spinner />
      ) : (
        <Button textColor="#f7b6b4" onClick={() => parseXml(xml)}>
          Tjuvkolla
        </Button>
      )}
    </>
  )
}

export default RSSInput

const Input = styled.input`
  font-family: "Baloo 2";
  font-weight: 400;
  font-size: 20px;
  display: block;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 2px solid white;
  padding: 15px 25px;
  width: 400px;
  background-color: transparent;
  max-width: 100%;

  &::placeholder {
    color: white;
  }
`
