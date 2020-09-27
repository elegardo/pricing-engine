'use strict'

const OLD_ENV = process.env

beforeEach(() => {
  jest.resetModules()
  process.env = { ...OLD_ENV }
  delete process.env.NODE_ENV
})

afterEach(() => {
  process.env = OLD_ENV
})

describe('databaseConfiguration', () => {
  it('should expose the default value if env variables are not present', () => {
    process.env = {
      DB_MIN_CONNECTIONS: undefined,
      DB_MAX_CONNECTIONS: undefined,
    }

    const databaseConfiguration = require('../databaseConfiguration')

    expect(databaseConfiguration.pool.min).toEqual(3)
    expect(databaseConfiguration.pool.max).toEqual(30)
  })
})
