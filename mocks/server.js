const express = require('express')
const path = require('path')
const app = express()
const router = express.Router()

const routes = require('./routes')(router)

// import routes
app.use('/', routes);

// use `public` directory to serve static files
app.use('/public', express.static(path.join(__dirname, 'public')))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})