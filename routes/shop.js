const path = require('path')
const express = require('express')
const { products } = require('./admin')

const router = express.Router()

router.get('/', (req, res, next) => {
  console.log(products)
  res.render('shop', { title: 'fuck yoruself' })
})

module.exports = router
