'use strict'

export const postProcessSchema = {
  schema: {
    response: {
      201: {},
      404: {
        type: 'object',
        properties: {
          message: { type: 'string' },
        },
      },
    },
  },
}
