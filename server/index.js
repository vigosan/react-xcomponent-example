const express = require('express')
const consign = require('consign')
const app = express()

consign({ cwd: 'server' })
  .include('libs/middlewares.js')
  .then('routes')
  .then('libs/boot.js')
  .into(app)

module.exports = app
