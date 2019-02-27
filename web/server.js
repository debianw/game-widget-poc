const express = require('express')
const next = require('next')
const compression = require('compression')

const port = parseInt(process.env.PORT, 10) || 5002
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(compression())

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`Web listening on port ${port}`)
  })
})
