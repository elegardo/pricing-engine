'use strict'

export const getAllRules = ({ dbClient }) => {
  return async () => {
    return await dbClient('rules')
      .select('id', 'name', 'description', 'conditions', 'event')
      .where({
        is_active: true,
      })
      .orderBy('created_at', 'asc')
  }
}
