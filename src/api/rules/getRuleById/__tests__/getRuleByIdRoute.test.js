'use strict'

import { getRuleByIdRoute } from '../getRuleByIdRoute'
import { getRuleByIdHandler } from '../getRuleByIdHandler'
import { getRuleByIdSchema } from '../getRuleByIdSchema'

const fastify = {
  route: jest.fn(),
}

describe('getRuleByIdRoute', () => {
  beforeAll(() => {
    fastify.route.mockClear()
  })

  it('should call fastify post with expected arguments', async () => {
    await getRuleByIdRoute(fastify)

    expect(fastify.route).toHaveBeenCalledTimes(1)
    expect(fastify.route).toHaveBeenCalledWith({
      method: 'GET',
      url: '/rules/:id',
      handler: getRuleByIdHandler,
      schema: getRuleByIdSchema,
    })
  })
})
