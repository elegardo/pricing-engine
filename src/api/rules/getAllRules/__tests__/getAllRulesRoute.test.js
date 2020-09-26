'use strict'

import { getAllRulesRoute } from '../getAllRulesRoute'
import { getAllRulesHandler } from '../getAllRulesHandler'
import { getAllRulesSchema } from '../getAllRulesSchema'

const fastify = {
  route: jest.fn(),
}

describe('getAllRulesRoute', () => {
  beforeAll(() => {
    fastify.route.mockClear()
  })

  it('should call fastify post with expected arguments', async () => {
    await getAllRulesRoute(fastify)

    expect(fastify.route).toHaveBeenCalledTimes(1)
    expect(fastify.route).toHaveBeenCalledWith({
      method: 'GET',
      url: '/rules',
      handler: getAllRulesHandler,
      schema: getAllRulesSchema,
    })
  })
})
