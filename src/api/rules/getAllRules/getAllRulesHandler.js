/* eslint-disable no-unused-vars */
/* eslint-disable require-await */
'use strict'

import { getAllRules } from '../../../repository'

export const getAllRulesHandler = async (request, reply) => {
  const rules = await getAllRules()
  reply.code(200).send({ rules: rules })
}
