const express = require('express')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
  res.status(404).send('page not found')
})

app.listen(8080)
