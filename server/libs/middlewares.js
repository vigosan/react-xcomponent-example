const express = require('express')
const path = require('path')

module.exports = function(app) {
  app.set('port', 8080)
  app.set('host', '0.0.0.0')

  const publicPath = express.static(path.join(__dirname, '../../dist'))
  app.use(publicPath)
}
