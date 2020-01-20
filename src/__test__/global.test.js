const text = 'Hello World'
const fruits = ['apple', 'cantaloupe', 'banana']

test('Should contain a text', () => {
  expect(text).toMatch(/World/)
})

test('Do we have a banana?', () => {
  expect(fruits).toContain('banana')
})

test('Greater than', () => {
  expect(10).toBeGreaterThan(9)
})

test('True', () => {
  expect(true).toBeTruthy()
})

const reverseString = (str, callback) => {
  callback(str.split('').reverse().join(''))
}

test('Test a Callback', () => {
  reverseString('Hello', (str) => {
    expect(str).toBe('olleH')
  })
})

const reverseString2 = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error('Error'))
    }

    resolve(str.split('').reverse().join(''))
  })
}

test('Test a promise', () => {
  return reverseString2('Hello')
    .then(str => {
      expect(str).toBe('olleH')
    })
})

test('Test a async/await', async () => {
  const str = await reverseString2('Hello')
  expect(str).toBe('olleH')
})

// afterEach(() => console.log('After each test'))
// afterAll(() => console.log('After all the tests'))

// beforeEach(() => console.log('Before each test'))
// beforeAll(() => console.log('Before all the test'))
