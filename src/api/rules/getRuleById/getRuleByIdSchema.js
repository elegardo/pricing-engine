'use strict'

export const getRuleByIdSchema = {
  schema: {
    response: {
      200: {
        type: 'array',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          description: { type: 'string' },
          conditions: { type: 'object' },
          event: { type: 'object' },
        },
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
