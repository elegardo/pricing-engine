'use strict'

export const createDBClient = ({ knex, configuration }) => knex(configuration)
