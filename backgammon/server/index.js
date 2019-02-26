const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.static(`${__dirname}/dist`));

app.get('/', (req, res) => {
  res.send('game server')
})


app.listen(port, () => console.log(`Game listening on port ${port}`));