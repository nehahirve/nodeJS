const express = require('express')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(shopRoutes)
app.use(adminRoutes)

app.use('/', (req, res, next) => {
  res.send('404 not found')
})

app.listen(8080)
