import React, { useReducer, useContext, createContext } from "react"

const PodStateContext = createContext()
const PodDispatchContext = createContext()

function Provider(props) {
  const [pod, podDispatch] = useReducer(podReducer, {})
  return (
    <PodStateContext.Provider value={pod}>
      <PodDispatchContext.Provider value={podDispatch}>
        {props.children}
      </PodDispatchContext.Provider>
    </PodStateContext.Provider>
  )
}

const usePodState = () => useContext(PodStateContext)
const usePodDispatch = () => useContext(PodDispatchContext)

export { Provider, usePodState, usePodDispatch }

function podReducer(state, action) {
  switch (action.type) {
    case "set":
      return action.podcast

    default:
      return state
  }
}
