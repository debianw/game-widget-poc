const express = require('express')
const compression = require('compression')
const app = express()
const port = process.env.PORT || 5001

app.use(compression())
app.use(express.static(`${__dirname}/dist`))

app.get('/', (req, res) => {
  res.send('game server')
})

app.listen(port, () => console.log(`Game listening on port ${port}`))
