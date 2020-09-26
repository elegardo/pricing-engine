/* eslint-disable require-await */
'use strict'

import { postProcessHandler } from './postProcessHandler'
import { postProcessSchema } from './postProcessSchema'

export const postProcessRoute = async (fastify) => {
  fastify.route({
    method: 'POST',
    url: '/process',
    handler: postProcessHandler,
    schema: postProcessSchema,
  })
}
