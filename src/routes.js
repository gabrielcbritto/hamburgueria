import { Router } from 'express'
const { v4 } = require('uuid')

import User from './app/models/User'

const routes = new Router()

routes.get('/', async (request, response) => {
  const user = await User.create({
    id: v4(),
    name: 'test',
    email: 'test@gmail.com',
    password_hash: '123123',
  })
  return response.json(user)
})

export default routes
