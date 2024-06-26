const add = require('../add');

describe('Add', () => {
  it('should return 0 for an empty OR null string', () => {
    expect(add('')).toBe(0);
    expect(add(' ')).toBe(0);
    expect(add(null)).toBe(0);
    expect(add(undefined)).toBe(0);
  });

  it('should return 1 for the string "1"', () => {
    expect(add('1')).toBe(1);
    expect(add('5')).toBe(5);
  });

  it('should return 3 for the string "1,2"', () => {
    expect(add('1,2')).toBe(3);
    expect(add('5,5')).toBe(10);
  });

  it('should return 6 for the string "1,2,3"', () => {
    expect(add('1,2,3')).toBe(6);
  });

  it('should return 15 for the string "5,5,5"', () => {
    expect(add('5,5,5')).toBe(15);
  });

  it('should return 15 for the string "5,5,5 "', () => {
    expect(add('5,5,5 ')).toBe(15);
  });

  it('should return 15 for the string "5,5,5,"', () => {
    expect(() => add('5,5,5,')).toThrow('Invalid input: Trailing separator not allowed');
  });

  it('should return 10 for the string "1,1,1,1,1,1,1,1,1,1"', () => {
    expect(add('1,1,1,1,1,1,1,1,1,1')).toBe(10);
  });

  it('should return 3 for the string "1 , 1 , 1"', () => {
    expect(add('1 , 1 , 1')).toBe(3);
  });

  it('should return 6 for the string "1,2\\n3"', () => {
    expect(add('1,2\n3')).toBe(6);
  });

  it('should return 5 for the string "2,\\n3"', () => {
    expect(add('2,\n3')).toBe(5);
  });

  // Custom delimiter test cases
  it('should return 4 for the string "//;\\n1;3"', () => {
    expect(add('//;\n1;3')).toBe(4);
  });

  it('should return 6 for the string "//|\\n1|2|3"', () => {
    expect(add('//|\n1|2|3')).toBe(6);
  });

  it('should return 7 for the string "//sep\\n2sep5"', () => {
    expect(add('//sep\n2sep5')).toBe(7);
  });

  it('should throw an error for the string "//|\\n1|2,3"', () => {
    expect(() => add('//|\n1|2,3')).toThrow("'|' expected");
  });


  // Negative number test cases
  it('should throw an error for the string "1,-2,3"', () => {
    expect(() => add('1,-2,3')).toThrow('Negative numbers found: -2');
  });

  it('should throw an error for the string "1,-2,-3"', () => {
    expect(() => add('1,-2,-3')).toThrow('Negative numbers found: -2, -3');
  });
});
