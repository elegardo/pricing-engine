'use strict'

import { getRuleByIdHandler } from '../getRuleByIdHandler'
import { getRuleById } from '../../../../repository'

jest.mock('../../../../repository')

const mockReply = {
  code: jest.fn().mockReturnThis(),
  status: jest.fn().mockReturnThis(),
  send: jest.fn().mockReturnThis(),
}
const getMockRequest = () => ({
  params: {
    id: 'some_id',
  },
})
const mockArrayRule = [
  {
    id: 'd7190738-ca25-4ea9-a368-466751272fd3',
    name: 'ruleSample1',
    description: 'description rule',
    conditions: {
      all: [
        {
          all: [
            {
              fact: 'price',
              value: '15',
              operator: 'lessThanXPercentThanCompetitor',
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
]

describe('postNewRuleHandler', () => {
  beforeEach(() => {
    mockReply.code.mockClear()
    getRuleById.mockClear()
  })

  it('should respond with status 201', async () => {
    const mockRequest = getMockRequest()
    getRuleById.mockReturnValue(mockArrayRule)

    await getRuleByIdHandler(mockRequest, mockReply)

    expect(getRuleById).toHaveBeenCalledTimes(1)
    expect(getRuleById).toHaveBeenCalledWith({
      id: mockRequest.params.id,
    })
    expect(mockReply.code).toHaveBeenCalledWith(200)
    expect(mockReply.send).toHaveBeenCalledWith(mockArrayRule[0])
  })
})
