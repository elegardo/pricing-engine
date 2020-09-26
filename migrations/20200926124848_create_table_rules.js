'use strict'

exports.up = async function (knex) {
  await knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
  return knex.schema.createTable('rules', (table) => {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary()
    table.string('name', 255).notNullable().unique()
    table.string('description', 2000)
    table.jsonb('conditions')
    table.jsonb('event')
    table.timestamp('created_at')
    table.timestamp('deleted_at')
    table.boolean('is_active', true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('rules')
}
