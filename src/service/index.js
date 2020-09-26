'use strict'

import { processRules } from './processRules'
import { getPricingEngine } from '../engine/getPricingEngine'

const processRulesInstance = processRules({
  getPricingEngine: getPricingEngine,
})

export { processRulesInstance as processRules }
