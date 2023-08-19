// write tests for the shapes library
// must use shapes: square, circle, triangle
// jest will be used to run the tests

//exaple code below not finished

const { generateShape } = require('./shapes');

describe('generateShape', () => {
  test('should generate a square with the correct dimensions', () => {
    const shape = generateShape('square', 100);
    expect(shape).toEqual('<rect x="0" y="0" width="100" height="100" />');
  });

  test('should generate a circle with the correct dimensions', () => {
    const shape = generateShape('circle', 50);
    expect(shape).toEqual('<circle cx="50" cy="50" r="50" />');
  });

  test('should generate a triangle with the correct dimensions', () => {
    const shape = generateShape('triangle', 100);
    expect(shape).toEqual('<polygon points="0,100 50,0 100,100" />');
  });
});