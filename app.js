const http = require('http')

const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log('hey i am in the middleware')
  next() // allows to continue to the next middleware
})

app.use((req, res, next) => {
  console.log('hey i am in another middleware')
  res.send('<h1>helow from express</h1>')
})

const server = http.createServer(app)

server.listen(8080)
