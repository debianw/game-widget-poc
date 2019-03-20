//
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { GameProvider, GameContext } from '../components/GameContext'
import { getGameId } from '../helpers'

//
const GAME_KEY = 'example.gambit'

//
const GameWrapper = () => {
  const { Game, loading, isAvailable } = useContext(GameContext)
  const [ gameId, setGameId ] = useState(0)

  useEffect(() => {
    setGameId(getGameId())
  }, [])

  return (
    <div>
      { loading && <div>Loading...</div>}
      { Game && <Game gameId={gameId} /> }
      { !isAvailable && !loading && <div> <b> Game not Available :( </b> </div> }
    </div>
  )
}

//
const withGameProvider = (props) => (
  <GameProvider keyname={GAME_KEY}>
    <GameWrapper {...props} /> 

    <Link href="/">
      <a> Back to home </a>
    </Link>
  </GameProvider>
)

//
export default withGameProvider