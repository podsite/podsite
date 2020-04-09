import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const PriceCard = ({ children }) => {
  return (
    <Wrapper
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.4,
        duration: 0.4,
      }}
    >
      {children}
    </Wrapper>
  )
}

export default PriceCard

const Wrapper = styled(motion.div)`
  padding: 20px;
  background-color: #111;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  button {
    margin-top: auto;
  }
`
