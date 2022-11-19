const { sum } = require('./calculate');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 10 + 12 to equal 22', () => {
  expect(sum(10, 12)).toBe(22);
});

test('add 1 + 1 to equal 2', () => {
  expect(sum(1, 1)).toBe(3);
});