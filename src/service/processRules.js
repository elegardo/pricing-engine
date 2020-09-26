'use strict'

export const processRules = ({ getPricingEngine }) => {
  return async ({ rules, data }) => {
    const engine = getPricingEngine()
    rules.forEach((rule) => {
      engine.addRule(rule)
    })

    const results = await engine.run(data)
    return processResult(results)
  }
}

const processResult = (results) => {
  let response = []
  if (results.events.length > 0) {
    results.events.map((event) => {
      response.push({
        message: event.params.message,
      })
    })
  } else {
    response.push({ message: 'Not match' })
  }
  return response
}
