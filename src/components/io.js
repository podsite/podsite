import React from "react"
import { useInView } from "react-intersection-observer"

const IO = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })
  return <div ref={ref}>{inView && children}</div>
}

export default IO
