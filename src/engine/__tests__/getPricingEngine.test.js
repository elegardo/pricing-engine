'use strict'

import { Engine } from 'json-rules-engine'
import { getPricingEngine } from '../getPricingEngine'

jest.mock('json-rules-engine')
jest.mock('../customOperators')

const addOperatorMock = jest.fn()
Engine.mockImplementation(() => {
  return {
    addOperator: addOperatorMock,
  }
})

describe('getPricingEngine', () => {
  beforeEach(() => {
    addOperatorMock.mockClear()
  })

  it('should return a PriceEngine', () => {
    getPricingEngine()

    expect(addOperatorMock).toHaveBeenCalledTimes(6)
    expect(addOperatorMock).toHaveBeenNthCalledWith(
      1,
      'lessThanXPercentThanCompetitor',
      expect.any(Function),
    )
    expect(addOperatorMock).toHaveBeenNthCalledWith(
      2,
      'greaterThanXPercentThanCompetitor',
      expect.any(Function),
    )
    expect(addOperatorMock).toHaveBeenNthCalledWith(
      3,
      'betweenXPercentThanCompetitor',
      expect.any(Function),
    )
    expect(addOperatorMock).toHaveBeenNthCalledWith(
      4,
      'equalToXPrice',
      expect.any(Function),
    )
    expect(addOperatorMock).toHaveBeenNthCalledWith(
      5,
      'equalToXStock',
      expect.any(Function),
    )
    expect(addOperatorMock).toHaveBeenNthCalledWith(
      6,
      'notEqualToXStock',
      expect.any(Function),
    )
  })
})
