/* eslint-disable require-await */
'use strict'

import { getAllRules } from '../../repository'
import { processRules } from '../../service'

export const postProcessHandler = async (request, reply) => {
  const data = {
    ...request.body,
  }

  const rules = await getAllRules()

  const results = await processRules({ rules, data })

  reply.code(200).send({ suggestions: results })
}
