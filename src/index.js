// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/app', async (request, reply) => {
  return { hello: 'Server 2' }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 5050, host:'127.0.0.1' })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()