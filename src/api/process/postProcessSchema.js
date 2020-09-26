'use strict'

export const postProcessSchema = {
  schema: {
    response: {
      201: {},
      404: {
        type: 'object',
        properties: {
          action: { type: 'string' },
          message: { type: 'string' },
        },
      },
    },
  },
}
