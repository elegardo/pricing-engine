/* eslint-disable require-await */
'use strict'

import { postNewRuleHandler } from './postNewRuleHandler'
import { postNewRuleSchema } from './postNewRuleSchema'

export const postNewRuleRoute = async (fastify) => {
  fastify.route({
    method: 'POST',
    url: '/rules',
    handler: postNewRuleHandler,
    schema: postNewRuleSchema,
  })
}
