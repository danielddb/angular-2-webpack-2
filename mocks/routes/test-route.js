const testMiddleware = require('../middlewares/test-middleware');

module.exports = function(router) {

  // define the about route
  router.get('/test-route', testMiddleware, function (req, res) {
    res.json({ test: 'Testing!' });
  });

  return router;
}