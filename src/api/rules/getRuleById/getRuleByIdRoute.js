/* eslint-disable require-await */
'use strict'

import { getRuleByIdHandler } from './getRuleByIdHandler'
import { getRuleByIdSchema } from './getRuleByIdSchema'

export const getRuleByIdRoute = async (fastify) => {
  fastify.route({
    method: 'GET',
    url: '/rules/:id',
    handler: getRuleByIdHandler,
    schema: getRuleByIdSchema,
  })
}
