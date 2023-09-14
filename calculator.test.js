const calculator = require('./calculator')

test('Add: string with a single number should result in the number itself', () => {
  expect(calculator.add('1')).toBe(1);
});

test('Add: string with two numbers separated by a comma should result in the sum of the numbers', () => {
  expect(calculator.add('4,5')).toBe(9);
});

test('Add: string with three numbers separated by commas should result in the sum of the numbers', () => {
  expect(calculator.add('2,8,4')).toBe(14);
});

test('Add: string with four numbers separated by commas should result in the sum of the numbers', () => {
  expect(calculator.add('2,0,4,5')).toBe(11);
});

test('Subtract: string with a single number should result in the number itself', () => {
  expect(calculator.subtract('1')).toBe(1);
});

test('Subtract: string with two numbers separated by a comma should result in the number itself', () => {
  expect(calculator.subtract('9, 7')).toBe(2);
});