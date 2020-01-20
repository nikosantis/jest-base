const cities = ['Santiago', 'Valparaíso', 'San Antonio', 'Viña del Mar', 'Algarrobo']

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)]
  return string
}

const reverseString2 = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error('Error'))
    }

    resolve(str.split('').reverse().join(''))
  })
}

module.exports = randomString
