import app from '../src/app'
import request from 'supertest'

it('should return 200', async () => {
  const response = await request(app).get('/')
  expect(response.status).toBe(200)
})
it('should return 404', async () => {
  const response = await request(app).get('/test')
  expect(response.status).toBe(404)
})
