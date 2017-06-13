module.exports = function(app) {
  const port = process.env.PORT || app.get('port')
  const host = process.env.HOST || app.get('host')

  app.listen(port, host, function(error) {
    /* eslint-disable no-console */
    if (error) {
      console.error(error)
      return
    }

    console.log('Listening at port http://' + host + ':' + port)
    /* eslint-enable no-console */
  })
}
