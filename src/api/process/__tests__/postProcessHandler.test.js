'use strict'

import { postProcessHandler } from '../postProcessHandler'
import { processRules } from '../../../service'
import { getAllRules } from '../../../repository'

jest.mock('../../../service')
jest.mock('../../../repository')

const mockReply = {
  code: jest.fn().mockReturnThis(),
  status: jest.fn().mockReturnThis(),
  send: jest.fn().mockReturnThis(),
}
const getMockRequest = () => ({
  body: {
    sku: '1',
    category: '1',
    price: {
      currentPrice: 800,
      competitorPrice: [800, 800, 800],
    },
  },
})

describe('postProcessHandler', () => {
  beforeEach(() => {
    mockReply.code.mockClear()
    processRules.mockClear()
    getAllRules.mockClear()
  })

  it('should respond with status 200', async () => {
    const mockRequest = getMockRequest()
    const mockRules = ['rules']
    const someResult = ['messages']
    getAllRules.mockReturnValue(mockRules)
    processRules.mockReturnValue(someResult)

    await postProcessHandler(mockRequest, mockReply)

    expect(getAllRules).toHaveBeenCalledTimes(1)
    expect(processRules).toHaveBeenCalledWith({
      rules: mockRules,
      data: mockRequest.body,
    })
    expect(mockReply.code).toHaveBeenCalledWith(200)
    expect(mockReply.send).toHaveBeenCalledWith({ suggestions: someResult })
  })
})
