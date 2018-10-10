const { randomBetween } = require('../index')

const object = { one: 1, two: 2 }
const nonEmptyString = 'Example'
const emptyString = ''
const booleanTrue = true
const booleanFalse = false
const exampleFunction = () => {
  return 1
}

test('Returns NaN if max is an object.', () => {
  expect(randomBetween(object)).toBeFalsy()
})

test('Returns NaN if max is a string with length > 0.', () => {
  expect(randomBetween(nonEmptyString)).toBeFalsy()
})

test('Returns NaN if max is an empty string.', () => {
  expect(randomBetween(emptyString)).toBeFalsy()
})

test('Returns a random whole number between 0 and a max if max is a number.', () => {
  expect(randomBetween(100)).toBeGreaterThan(0)
  expect(randomBetween(100)).toBeLessThanOrEqual(100)
})

test('Returns NaN if max is a boolean = true.', () => {
  expect(randomBetween(booleanTrue)).toBeFalsy()
})

test('Returns NaN if max is a boolean = false.', () => {
  expect(randomBetween(booleanFalse)).toBeFalsy()
})

test('Returns NaN if max is a function', () => {
  expect(randomBetween(exampleFunction)).toBeFalsy()
})

test('Returns NaN if max is undefined.', () => {
  expect(randomBetween(undefined)).toBeFalsy()
})

test('Returns NaN if group is null.', () => {
  expect(randomBetween(null)).toBeFalsy()
})