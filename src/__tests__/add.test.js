

//Create a simple calculator that takes a String and returns a integer

// Signature (pseudo code):
// int Add(string numbers)
// Requirements
// 1. The method can take up to two numbers, separated by commas, and will return their sum as a result. So the inputs can be: “”, “1”, “1,2”. For an empty string, it will return 0.

// Notes:

// start with the simplest case (empty string) and extend it with the more advanced cases (“1” and “1,2”) step by step
// keep the three rules in mind and always write just sufficient enough code
// do not forget to refactor your code after each passing test

// Test cases

const Add = require('../add');
describe('Add', () => {
  it('should return 0 for an empty string', () => {
    expect(Add('')).toBe(0);
  });
});