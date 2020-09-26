/* eslint-disable require-await */
'use strict'

import { getRuleById } from '../../../repository'

export const getRuleByIdHandler = async (request, reply) => {
  const id = request.params.id
  const rule = await getRuleById({ id })
  reply.code(200).send(rule[0])
}
