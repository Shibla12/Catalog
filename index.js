const jsonserver = require('json-server')

const server = jsonserver.create()

const route = jsonserver.router('db.json')

const middleware = jsonserver.defaults()

server.use(middleware)
server.use(route)

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
