const text = 'Hello World'

test('Shoult content a text', () => {
  expect(text).toMatch(/World/)
})
