/* eslint-disable require-await */
'use strict'

import { saveRule } from '../../../repository'

export const postRulesHandler = async (request, reply) => {
  const data = {
    ...request.body,
  }

  await saveRule({ rule: data })

  reply.code(201).send()
}
