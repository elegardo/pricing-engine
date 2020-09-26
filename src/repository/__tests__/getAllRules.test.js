'use strict'

import { getAllRules } from '../getAllRules'

const createDBClientMock = () => ({
  select: jest.fn().mockReturnThis(),
  where: jest.fn().mockReturnThis(),
  orderBy: jest.fn().mockReturnThis(),
})

const dbClient = createDBClientMock()
const repository = getAllRules({
  dbClient: jest.fn().mockReturnValue(dbClient),
})

describe('getAllRules', () => {
  it('should select all rules', async () => {
    const mockData = [{ data: 'data1' }, { data: 'data2' }]
    const dbClientMock = createDBClientMock()

    dbClientMock.orderBy.mockResolvedValue(mockData)

    await repository()

    expect(dbClient.select).toHaveBeenCalledWith(
      'id',
      'name',
      'description',
      'conditions',
      'event',
    )
    expect(dbClient.where).toHaveBeenCalledWith({
      is_active: true,
    })
    expect(dbClient.orderBy).toHaveBeenCalledWith('created_at', 'asc')
  })
})
