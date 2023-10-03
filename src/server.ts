import Fastify from 'fastify';

import { getDataCount } from './db/queries';

const port = parseInt(process.env.PORT || '3000', 10);
const host = 'RENDER' in process.env ? '0.0.0.0' : 'localhost';

const fastify = Fastify({
  logger: true,
});

fastify.get('/', async function (request, reply) {
  const count = await getDataCount();

  reply.send({ count });
});

fastify.listen({ port, host }, function (err, address) {
  if (err) {
    fastify.log.error(err);

    process.exit(1);
  }
});
