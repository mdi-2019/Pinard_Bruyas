math = require('mathjs')

test('evaluate sin(0): ', () => {
  expect(math.eval('sin(0)')).toBe(0)
})

test('evaluate 2 * 2: ', () => {
  expect(math.eval('2 * 2')).toBe(4)
})
