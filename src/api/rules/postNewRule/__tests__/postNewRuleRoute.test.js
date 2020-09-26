'use strict'

import { postNewRuleRoute } from '../postNewRuleRoute'
import { postNewRuleHandler } from '../postNewRuleHandler'
import { postNewRuleSchema } from '../postNewRuleSchema'

const fastify = {
  route: jest.fn(),
}

describe('postNewRuleRoute', () => {
  beforeAll(() => {
    fastify.route.mockClear()
  })

  it('should call fastify post with expected arguments', async () => {
    await postNewRuleRoute(fastify)

    expect(fastify.route).toHaveBeenCalledTimes(1)
    expect(fastify.route).toHaveBeenCalledWith({
      method: 'POST',
      url: '/rules',
      handler: postNewRuleHandler,
      schema: postNewRuleSchema,
    })
  })
})
