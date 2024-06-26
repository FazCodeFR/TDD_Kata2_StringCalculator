

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
  it('should return 0 for an empty OR null string', () => {
    expect(Add('')).toBe(0);
    expect(Add(' ')).toBe(0);
    expect(Add(null)).toBe(0);
    expect(Add(undefined)).toBe(0);
  });


  it('should return 1 for the string "1"', () => {
    expect(Add('1')).toBe(1);
    expect(Add('5')).toBe(5);
  });

  it('should return 3 for the string "1,2"', () => {
    expect(Add('1,2')).toBe(3);
    expect(Add('5,5')).toBe(10);
  });

  it('should return 6 for the string "1,2,3"', () => {
    expect(Add('1,2,3')).toBe(6);
  });

  it('should return 15 for the string "5,5,5"', () => {
    expect(Add('5,5,5')).toBe(15);
  });

  it('should return 15 for the string "5,5,5 "', () => {
    expect(Add('5,5,5 ')).toBe(15);
  });

  it('should return 15 for the string "5,5,5,"', () => {
    expect(Add('5,5,5,')).toBe(15);
  });

  it('should return 10 for the string "1,1,1,1,1,1,1,1,1,1"', () => {
    expect(Add('1,1,1,1,1,1,1,1,1,1')).toBe(10);
  });

  it('should return 3 for the string "1 , 1 , 1"', () => {
    expect(Add('1 , 1 , 1')).toBe(3);
  });

  it('should return 6 for the string "1,2\\n3"', () => {
    expect(Add('1,2\n3')).toBe(6);
  });

  it('should return 5 for the string "2,\\n3"', () => {
    expect(Add('2,\n3')).toBe(5);
  });

});