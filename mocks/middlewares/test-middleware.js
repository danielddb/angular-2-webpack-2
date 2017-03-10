module.exports = function testMiddleware(req, res, next) {
  console.log('Time: ', Date.now())
  next()
}