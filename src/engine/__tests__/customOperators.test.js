'use strict'

import {
  betweenXPercentThanCompetitor,
  equalToXPrice,
  greaterThanXPercentThanCompetitor,
  lessThanXPercentThanCompetitor,
  equalToXStock,
} from '../customOperators'

describe('betweenXPercentThanCompetitor', () => {
  it('should respond true when range is between 5%', () => {
    const factValue = {
      currentPrice: 810,
      competitorPrice: [800, 800, 800],
    }
    const jsonValue = 5
    const result = betweenXPercentThanCompetitor(factValue, jsonValue)

    expect(result).toBe(true)
  })

  it('should respond false when range is over 5%', () => {
    const factValue = {
      currentPrice: 900,
      competitorPrice: [800, 800, 800],
    }
    const jsonValue = 5
    const result = betweenXPercentThanCompetitor(factValue, jsonValue)

    expect(result).toBe(false)
  })
})

describe('equalToXPrice', () => {
  it('should respond true when price is equal to competitorPrice average', () => {
    const factValue = {
      currentPrice: 800,
      competitorPrice: [800, 800, 800],
    }
    const jsonValue = 'competitorPrice'
    const result = equalToXPrice(factValue, jsonValue)

    expect(result).toBe(true)
  })

  it('should respond false when price is not equal to competitorPrice average', () => {
    const factValue = {
      currentPrice: 900,
      competitorPrice: [800, 800, 800],
    }
    const jsonValue = 'competitorPrice'
    const result = equalToXPrice(factValue, jsonValue)

    expect(result).toBe(false)
  })
})

describe('greaterThanXPercentThanCompetitor', () => {
  it('should respond true when price is greater over 5%', () => {
    const factValue = {
      currentPrice: 900,
      competitorPrice: [800, 800, 800],
    }
    const jsonValue = 5
    const result = greaterThanXPercentThanCompetitor(factValue, jsonValue)

    expect(result).toBe(true)
  })

  it('should respond true when price is not greater in 5%', () => {
    const factValue = {
      currentPrice: 810,
      competitorPrice: [800, 800, 800],
    }
    const jsonValue = 5
    const result = greaterThanXPercentThanCompetitor(factValue, jsonValue)

    expect(result).toBe(false)
  })
})

describe('lessThanXPercentThanCompetitor', () => {
  it('should respond true when price is less over 5%', () => {
    const factValue = {
      currentPrice: 700,
      competitorPrice: [800, 800, 800],
    }
    const jsonValue = 5
    const result = lessThanXPercentThanCompetitor(factValue, jsonValue)

    expect(result).toBe(true)
  })

  it('should respond true when price is not less in 5%', () => {
    const factValue = {
      currentPrice: 790,
      competitorPrice: [800, 800, 800],
    }
    const jsonValue = 5
    const result = lessThanXPercentThanCompetitor(factValue, jsonValue)

    expect(result).toBe(false)
  })
})

describe('equalToXStock', () => {
  it('should respond true when stock is equal some value', () => {
    const factValue = [800, 0, 0]
    const jsonValue = 800
    const result = equalToXStock(factValue, jsonValue)

    expect(result).toBe(true)
  })

  it('should respond true when stock is not equal some value', () => {
    const factValue = [800, 800, 900]
    const jsonValue = 800
    const result = equalToXStock(factValue, jsonValue)

    expect(result).toBe(false)
  })
})
