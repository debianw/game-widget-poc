//
export const getGameId = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const gameId = urlParams.get('id')

  return gameId
}

//
export const createWaitFor = (options = {}) => { 
  let count = 0
  let timeId = 0
  const retries = options.retries || 30

  const waitFor = (varName, callback) => {
    if (window[varName]) return callback(true) 
    if (count >= retries) return callback(null)

    timeId = setTimeout(() => {
      // console.log(`wait for ${varName} | count: ${count}`)
      waitFor(varName, callback)
      count += 1
    }, 300)

    return () => clearTimeout(timeId)
  }

  return waitFor
}

//
export const isClient = typeof window !== undefined

//
export const isServer = typeof window === 'undefined'