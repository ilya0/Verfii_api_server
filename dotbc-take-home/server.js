const jsonServer = require('json-server')
const bodyParser = require('body-parser')
const server = jsonServer.create()
const router = jsonServer.router('dbmusic.json')
const middlewares = jsonServer.defaults()


// // Set default middlewares (logger, static, cors and no-cache)
// server.use(middlewares)


// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})
server.use('/api/v1', middlewares)
server.use('/api/v1', router)

// // To handle POST, PUT and PATCH you need to use a body-parser
// // You can use the one used by JSON Server
// server.use(jsonServer.bodyParser)
// server.use((req, res, next) => {
//   if (req.method === 'POST') {
//     req.body.createdAt = Date.now()
//   }
//   // Continue to JSON Server router
//   next()
// })


server.use(middlewares)
server.use(router)


server.listen(3000, () => {
  console.log('JSON Server is running on 3000')
})