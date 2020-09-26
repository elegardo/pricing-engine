'use strict'

const schemaResponse = {
  type: 'object',
  properties: {
    message: { type: 'string' },
  },
}

export const postNewRuleSchema = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: schemaResponse,
      },
      404: {
        type: 'object',
        properties: {
          message: { type: 'string' },
        },
      },
    },
  },
}
