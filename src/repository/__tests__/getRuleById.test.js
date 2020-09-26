'use strict'

import { getRuleById } from '../getRuleById'

const createDBClientMock = () => ({
  select: jest.fn().mockReturnThis(),
  where: jest.fn().mockReturnThis(),
  orderBy: jest.fn().mockReturnThis(),
})

const dbClient = createDBClientMock()
const repository = getRuleById({
  dbClient: jest.fn().mockReturnValue(dbClient),
})

describe('getRuleById', () => {
  it('should select rules by id', async () => {
    const mockId = 'd7190738-ca25-4ea9-a368-466751272fd3'
    const mockData = [{ data: 'data1' }]
    const dbClientMock = createDBClientMock()

    dbClientMock.orderBy.mockResolvedValue(mockData)

    await repository({ id: mockId })

    expect(dbClient.select).toHaveBeenCalledWith(
      'id',
      'name',
      'description',
      'conditions',
      'event',
    )
    expect(dbClient.where).toHaveBeenCalledWith({
      id: mockId,
      is_active: true,
    })
    expect(dbClient.orderBy).toHaveBeenCalledWith('created_at', 'asc')
  })
})
