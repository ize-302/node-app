
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Hello World'
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})