const randomString = require('../index')

describe('test the functionalities of randomString', () => {
  test('Test functionality', () => {
    expect(typeof (randomString())).toBe('string')
  })

  test('Check that there is no city', () => {
    expect(randomString()).not.toMatch(/La Serena/)
  })
})
