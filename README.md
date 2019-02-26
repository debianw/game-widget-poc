# Widget for NextJs PoC

## Rendering Game in a Page

```
//
import React, { useContext, useEffect, useState } from 'react'
import { GameProvider, GameContext } from '../components/GameContext'
import { getGameId } from '../helpers'

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
  <GameProvider keyname="backgammon">
    <GameWrapper {...props} /> 
  </GameProvider>
)

//
export default withGameProvider