/* eslint-disable require-await */
'use strict'

import { getAllRulesHandler } from './getAllRulesHandler'
import { getAllRulesSchema } from './getAllRulesSchema'

export const getAllRulesRoute = async (fastify) => {
  fastify.route({
    method: 'GET',
    url: '/rules',
    handler: getAllRulesHandler,
    schema: getAllRulesSchema,
  })
}
