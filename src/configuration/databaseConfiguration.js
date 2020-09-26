'use strict'

const path = require('path')
require('dotenv').config()

const {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_PORT,
  DB_MIN_CONNECTIONS,
  DB_MAX_CONNECTIONS,
} = process.env

const databaseConfiguration = {
  client: 'postgres',
  pool: {
    min: parseInt(DB_MIN_CONNECTIONS) || 3,
    max: parseInt(DB_MAX_CONNECTIONS) || 30,
  },
  acquireConnectionTimeout: 10000,
  migrations: {
    tableName: 'knex_migrations_price_buddy',
    directory: path.resolve(__dirname, '../../migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, '../../seeds'),
  },
  connection: {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT,
  },
  asyncStackTraces: true,
  debug: false,
}

module.exports = databaseConfiguration
