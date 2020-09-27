'use strict'

import { processRules } from '../processRules'

const addRuleMock = jest.fn()
const runMock = jest.fn()
const getMockEngine = () => {
  return {
    addRule: addRuleMock,
    run: runMock,
  }
}
const process = processRules({ getPricingEngine: getMockEngine })
const mockRules = [
  {
    name: 'ruleSample1',
    description: 'description rule',
    conditions: {
      all: [
        {
          all: [
            {
              fact: 'price',
              operator: 'lessThanXPercentThanCompetitor',
              value: '5',
            },
          ],
        },
      ],
    },
    event: {
      type: 'event',
      params: {
        action: 'decrease',
        message:
          'Ups !! estas al menos un 5% bajo la competencia, estas seguro de este precio ?  ;)',
      },
    },
  },
  {
    name: 'ruleSample2',
    description: 'description rule',
    conditions: {
      all: [
        {
          all: [
            {
              fact: 'price',
              value: '5',
              operator: 'greaterThanXPercentThanCompetitor',
            },
          ],
        },
      ],
    },
    event: {
      type: 'event',
      params: {
        action: 'decrease',
        message:
          'Cuidado !! baja un poquito tu precio, estas sobre el 5% que tu competencia',
      },
    },
  },
]
describe('processRules', () => {
  beforeEach(() => {
    addRuleMock.mockClear()
    runMock.mockClear()
  })

  it('should process rules correctly', async () => {
    const mockEngineResult = {
      events: [
        {
          type: 'event',
          params: {
            action: 'decrease',
            message:
              'Ups !! estas al menos un 5% bajo la competencia, estas seguro de este precio ?  ;)',
          },
        },
      ],
    }
    const mockData = {
      sku: '1',
      category: '1',
      competitorStock: [800, 0, 0],
      price: {
        currentPrice: 900,
        competitorPrice: [800, 800, 800],
      },
    }
    runMock.mockResolvedValue(mockEngineResult)

    const results = await process({ rules: mockRules, data: mockData })

    expect(addRuleMock).toHaveBeenCalledTimes(2)
    expect(addRuleMock).toHaveBeenNthCalledWith(1, mockRules[0])
    expect(addRuleMock).toHaveBeenNthCalledWith(2, mockRules[1])
    expect(results).toEqual([
      {
        action: 'decrease',
        message:
          'Ups !! estas al menos un 5% bajo la competencia, estas seguro de este precio ?  ;)',
      },
    ])
  })

  it('should return empty array when rules do not trigger', async () => {
    const mockEngineResult = {
      events: [],
    }
    const mockData = {
      sku: '1',
      category: '1',
      competitorStock: [800, 0, 0],
      price: {
        currentPrice: 900,
        competitorPrice: [800, 800, 800],
      },
    }
    runMock.mockResolvedValue(mockEngineResult)

    const results = await process({ rules: mockRules, data: mockData })

    expect(addRuleMock).toHaveBeenCalledTimes(2)
    expect(addRuleMock).toHaveBeenNthCalledWith(1, mockRules[0])
    expect(addRuleMock).toHaveBeenNthCalledWith(2, mockRules[1])
    expect(results).toEqual([])
  })
})
