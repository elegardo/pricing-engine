'use strict'

import 'make-promises-safe'
import fastify from 'fastify'
import { api } from './api'

export const create = () => {
  const server = fastify({ logger: true })
  server.register(api)
  return server
}

const start = async () => {
  try {
    const server = create()
    await server.listen(3000, '0.0.0.0')
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

start()
