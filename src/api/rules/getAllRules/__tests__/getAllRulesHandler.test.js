'use strict'

import { getAllRulesHandler } from '../getAllRulesHandler'
import { getAllRules } from '../../../../repository'

jest.mock('../../../../repository')

const mockReply = {
  code: jest.fn().mockReturnThis(),
  status: jest.fn().mockReturnThis(),
  send: jest.fn().mockReturnThis(),
}
const getMockRequest = () => ({})
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
  {
    id: '935fab01-ebb6-499e-a604-d1394184e7f6',
    name: 'ruleSample2',
    description: 'description rule',
    conditions: {
      all: [
        {
          all: [
            {
              fact: 'price',
              value: '15',
              operator: 'greaterThanXPercentThanCompetitor',
            },
          ],
        },
      ],
    },
    event: {
      type: 'event',
      params: {
        message:
          'Cuidado !! baja un poquito tu precio, estas sobre el 15% que tu competencia',
      },
    },
  },
]

describe('postNewRuleHandler', () => {
  beforeEach(() => {
    mockReply.code.mockClear()
    getAllRules.mockClear()
  })

  it('should respond with status 201', async () => {
    const mockRequest = getMockRequest()
    getAllRules.mockReturnValue(mockArrayRule)

    await getAllRulesHandler(mockRequest, mockReply)

    expect(getAllRules).toHaveBeenCalledTimes(1)
    expect(getAllRules).toHaveBeenCalledWith()
    expect(mockReply.code).toHaveBeenCalledWith(200)
    expect(mockReply.send).toHaveBeenCalledWith({ rules: mockArrayRule })
  })
})
