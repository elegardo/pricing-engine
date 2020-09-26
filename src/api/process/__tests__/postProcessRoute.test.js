'use strict'

import { postProcessRoute } from '../postProcessRoute'
import { postProcessHandler } from '../postProcessHandler'
import { postProcessSchema } from '../postProcessSchema'

const fastify = {
  route: jest.fn(),
}

describe('postProcessRoute', () => {
  beforeAll(() => {
    fastify.route.mockClear()
  })

  it('should call fastify post with expected arguments', async () => {
    await postProcessRoute(fastify)

    expect(fastify.route).toHaveBeenCalledTimes(1)
    expect(fastify.route).toHaveBeenCalledWith({
      method: 'POST',
      url: '/process',
      handler: postProcessHandler,
      schema: postProcessSchema,
    })
  })
})
