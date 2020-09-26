'use strict'

import Knex from 'knex'
import databaseConfiguration from '../configuration/databaseConfiguration'
import { createDBClient } from './createDBClient'
import { saveRule } from './saveRule'
import { getAllRules } from './getAllRules'
import { getRuleById } from './getRuleById'

const dbClient = createDBClient({
  knex: Knex,
  configuration: databaseConfiguration,
})

const saveRuleInstance = saveRule({
  dbClient: dbClient,
})
const getAllRulesInstance = getAllRules({
  dbClient: dbClient,
})
const getRuleByIdInstance = getRuleById({
  dbClient: dbClient,
})

export {
  saveRuleInstance as saveRule,
  getAllRulesInstance as getAllRules,
  getRuleByIdInstance as getRuleById,
}
