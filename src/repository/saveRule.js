'use strict'

export const saveRule = ({ dbClient }) => {
  return async ({ rule }) => {
    return await dbClient('rules')
      .insert({
        name: rule.name,
        description: rule.description,
        conditions: rule.conditions,
        event: rule.event,
        created_at: new Date(),
        is_active: true,
      })
      .returning('*')
  }
}
