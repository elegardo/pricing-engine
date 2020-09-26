/* eslint-disable require-await */
'use strict'

import { postRulesHandler } from './postRulesHandler'
import { postRulesSchema } from './postRulesSchema'

export const postRulesRoute = async (fastify) => {
  fastify.route({
    method: 'POST',
    url: '/rules',
    handler: postRulesHandler,
    schema: postRulesSchema,
  })
}
