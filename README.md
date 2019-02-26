# Widget for NextJs PoC

## Setup

### Step 1

```
npm install
npm run build:game
```

### Step 2 (start CDN server)
```
npm run start:game
```

### Step 3 (start WEB project)
```
cd ./web
npm install
npm run dev
```

## Rendering Game in a Page

```
const GAME_KEY = 'backgammon'

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
  <GameProvider keyname={GAME_KEY}>
    <GameWrapper {...props} /> 
  </GameProvider>
)

//
export default withGameProvider
```

For more details take a look to `./web/pages/game`