import React, { useState } from "react"
import styled from "styled-components"
import { usePodDispatch } from "../state"
import { navigate } from "gatsby"
import axios from "axios"
import { Spinner } from "@theme-ui/components"
var parseString = require("xml2js").parseString

const RSSInput = () => {
  const [xml, setXml] = useState(null)
  const [loading, setLoading] = useState(false)
  const podDispatch = usePodDispatch()

  function parseXml() {
    setLoading(true)
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
    axios
      .get(CORS_PROXY + xml)
      .then(response => {
        console.log(response)
        if (response.status === 200) {
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
                  url: x.enclosure[0].$.url,
                }
                console.log(ep)

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
        <Button onClick={() => parseXml()}>Tjuvkolla</Button>
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

  &::placeholder {
    color: white;
  }
`
const Button = styled.button`
  padding: 7px 25px 5px 25px;
  font-size: 26px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 3px solid white;
  border-radius: 10px;
  font-family: "Baloo 2";
  font-weight: 800;
  cursor: pointer;
  background-color: white;
  color: #f7b6b4;
  transition: background-color 50ms ease-in;

  &:hover {
    color: white;
    background-color: transparent;
  }
`
