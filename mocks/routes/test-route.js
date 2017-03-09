module.exports = function(router) {
  // middleware that is specific to this router
  router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })

  // define the about route
  router.get('/test-route', function (req, res) {
    res.send('About birds')
  });

  return router;
}