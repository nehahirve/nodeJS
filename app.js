const express = require('express')
const path = require('path')
const expressHbs = require('express-handlebars')
const admin = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express()

app.engine('handlebars', expressHbs())
app.set('view engine', 'handlebars')
// app.set('views', 'views')

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(shopRoutes)
app.use('/admin', admin.router)

app.use((req, res, next) => {
  res.status(404).render('404', { title: 'Page not found go fuck yourself' })
})

app.listen(8080)
