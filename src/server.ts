import Fastify from 'fastify';

const port = parseInt(process.env.PORT || '3000', 10);

const fastify = Fastify({
  logger: true,
});

fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' });
});

fastify.listen({ port }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});