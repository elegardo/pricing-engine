'use strict'

const schemaResponse = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    description: { type: 'string' },
    conditions: { type: 'object' },
    event: { type: 'object' },
  },
}

export const getAllRulesSchema = {
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
