'use strict'

import { postNewRuleHandler } from '../postNewRuleHandler'
import { saveRule } from '../../../../repository'

jest.mock('../../../../repository')

const mockReply = {
  code: jest.fn().mockReturnThis(),
  status: jest.fn().mockReturnThis(),
  send: jest.fn().mockReturnThis(),
}
const getMockRequest = () => ({
  body: {
    name: 'ruleSample1',
    description: 'description rule',
    conditions: {
      all: [
        {
          all: [
            {
              fact: 'price',
              operator: 'lessThanXPercentThanCompetitor',
              value: '15',
            },
          ],
        },
      ],
    },
    event: {
      type: 'event',
      params: {
        message:
          'Ups !! estas al menos un 15% bajo la competencia, estas seguro de este precio ?  ;)',
      },
    },
  },
})

describe('postNewRuleHandler', () => {
  beforeEach(() => {
    mockReply.code.mockClear()
    saveRule.mockClear()
  })

  it('should respond with status 201', async () => {
    const mockRequest = getMockRequest()
    saveRule.mockReturnValue(true)

    await postNewRuleHandler(mockRequest, mockReply)

    expect(saveRule).toHaveBeenCalledTimes(1)
    expect(saveRule).toHaveBeenCalledWith({
      rule: mockRequest.body,
    })
    expect(mockReply.code).toHaveBeenCalledWith(201)
  })
})
