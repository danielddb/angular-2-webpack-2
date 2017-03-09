const express = require('express')
const app = express()
const router = express.Router()

const routes = require('./routes')(router)

app.use('/', routes)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})