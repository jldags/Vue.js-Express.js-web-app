const express = require('express')
const app = express()
const port = 8081

app.get('/status', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})