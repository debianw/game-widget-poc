//
import React, { createContext, useEffect, useState } from 'react'
import Head from 'next/head'
import {
  isClient,
  createWaitFor
} from '../helpers'

// const cdnServer = 'http://localhost:5001'
const cdnServer = 'https://cdn.gambit.com/games/development/example'

//
export const GameContext = createContext({})

//
export const GameProvider = ({
  keyname,
  children
}) => {
  const [ loading, setLoading ] = useState(true)
  const [ injectScript, setInjectScript ] = useState(false)
  const [ isAvailable, setIsAvailable ] = useState(false)
  const Game = isAvailable ? window[keyname] : null

  useEffect(() => {
    if (!isClient) return

    setInjectScript(true)

    const waitFor = createWaitFor()
    const cancelWaitFor = waitFor(keyname, res => {
      setLoading(false)
      setIsAvailable(res)
    })

    return () => {
      if (typeof cancelWaitFor === 'function') cancelWaitFor()
    }
  }, [])

  return (
    <GameContext.Provider value={{
      Game,
      loading,
      isAvailable
    }}>
      {children}

      {keyname && injectScript && (
        <Head>
          <script type="application/javascript" src={`${cdnServer}/${keyname}.js`}></script> 
        </Head>
      )}
    </GameContext.Provider>
  ) 
}