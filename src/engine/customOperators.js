'use strict'

const averagePriceCalculation = (competitors) => {
  const average = (array) => array.reduce((a, b) => a + b) / array.length
  return average(competitors)
}

export const lessThanXPercentThanCompetitor = (factValue, jsonValue) => {
  const { currentPrice, competitorPrice } = factValue
  const average = averagePriceCalculation(competitorPrice)
  return currentPrice * (1 + jsonValue / 100) < average
}

export const greaterThanXPercentThanCompetitor = (factValue, jsonValue) => {
  const { currentPrice, competitorPrice } = factValue
  const average = averagePriceCalculation(competitorPrice)
  return currentPrice > average * (1 + jsonValue / 100)
}

export const betweenXPercentThanCompetitor = (factValue, jsonValue) => {
  const { currentPrice, competitorPrice } = factValue
  const average = averagePriceCalculation(competitorPrice)
  return (
    currentPrice <= average * (1 + jsonValue / 100) &&
    currentPrice >= average - average * (jsonValue / 100)
  )
}

export const equalToXPrice = (factValue, jsonValue) => {
  const { currentPrice, competitorPrice } = factValue
  let xPrice
  if ('competitorPrice' === jsonValue) {
    xPrice = averagePriceCalculation(competitorPrice)
  } else {
    xPrice = factValue[jsonValue]
  }
  return currentPrice === xPrice
}
