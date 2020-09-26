'use strict'

export const getRuleById = ({ dbClient }) => {
  return async ({ id }) => {
    return await dbClient('rules')
      .select('id', 'name', 'description', 'conditions', 'event')
      .where({
        id,
        is_active: true,
      })
      .orderBy('created_at', 'asc')
  }
}
