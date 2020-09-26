'use strict'

import { advanceTo } from 'jest-date-mock'
import { saveRule } from '../saveRule'

advanceTo('2020-09-26T20:59:18.274Z')

const createDBClientMock = () => ({
  insert: jest.fn().mockReturnThis(),
  returning: jest.fn().mockReturnThis(),
})

const dbClient = createDBClientMock()
const repository = saveRule({
  dbClient: jest.fn().mockReturnValue(dbClient),
})
const mockRule = {
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
}

describe('saveRule', () => {
  it('should save one rule', async () => {
    const mockData = [{ data: 'data1' }]
    const dbClientMock = createDBClientMock()

    dbClientMock.returning.mockResolvedValue(mockData)

    await repository({ rule: mockRule })

    expect(dbClient.insert).toHaveBeenCalledWith({
      name: mockRule.name,
      description: mockRule.description,
      conditions: mockRule.conditions,
      event: mockRule.event,
      created_at: new Date(),
      is_active: true,
    })
    expect(dbClient.returning).toHaveBeenCalledWith('*')
  })
})
