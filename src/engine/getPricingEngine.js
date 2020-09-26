'use strict'

import { Engine } from 'json-rules-engine'
import {
  lessThanXPercentThanCompetitor,
  greaterThanXPercentThanCompetitor,
  betweenXPercentThanCompetitor,
  equalToXPrice,
} from './customOperators'

export const getPricingEngine = () => {
  const engine = new Engine()

  engine.addOperator('lessThanXPercentThanCompetitor', (factValue, jsonValue) =>
    lessThanXPercentThanCompetitor(factValue, jsonValue),
  )
  engine.addOperator(
    'greaterThanXPercentThanCompetitor',
    (factValue, jsonValue) =>
      greaterThanXPercentThanCompetitor(factValue, jsonValue),
  )
  engine.addOperator('betweenXPercentThanCompetitor', (factValue, jsonValue) =>
    betweenXPercentThanCompetitor(factValue, jsonValue),
  )
  engine.addOperator('equalToXPrice', (factValue, jsonValue) =>
    equalToXPrice(factValue, jsonValue),
  )

  return engine
}
