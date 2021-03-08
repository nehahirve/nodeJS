const express = require('express')
const path = require('path')

const admin = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(shopRoutes)
app.use('/admin', admin.router)

app.use('/', (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(8080)
