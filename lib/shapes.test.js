// write tests for the shapes library
// must use shapes: square, circle, triangle
// jest will be used to run the tests

//exaple code below not finished

const { generateShape } = require('./shapes');

describe('generateShape', () => {
  test('should generate a square with the correct dimensions', () => {
    const shape = generateShape('square', 200);
    expect(shape).toEqual('<rect x="0" y="0" width="200" height="200" />');
  });

  test('should generate a circle with the correct dimensions', () => {
    const shape = generateShape('circle', 100);
    expect(shape).toEqual('<circle cx="100" cy="100" r="100" />');
  });

  test('should generate a triangle with the correct dimensions', () => {
    const shape = generateShape('triangle', 200);
    expect(shape).toEqual('<polygon points="0,200 100,0 200,200" />');
  });
});

// how about just test if the shapes are generated fro aobve code.

//   test('should fit the square within a 300x200 pixel size', () => {
//     const shape = generateShape('square', 200);
//     expect(shape).toMatch(/width="(\d{1,2}|1\d{2}|200)" height="(\d{1,2}|1\d{2}|200)"/);
//   });

//   test('should fit the circle within a 300x200 pixel size', () => {
//     const shape = generateShape('circle', 100);
//     expect(shape).toMatch(/cx="(\d{1,2}|1\d{2})" cy="(\d{1,2}|1\d{2})" r="(\d{1,2}|1\d{2}|200)"/);
//   });

//   test('should fit the triangle within a 300x200 pixel size', () => {
//     const shape = generateShape('triangle', 200);
//     expect(shape).toMatch(/points="(\d{1,2}|1\d{2}|200),(\d{1,2}|1\d{2}|200) (\d{1,2}|1\d{2}),(\d{1,2}|1\d{2}|200) (\d{1,2}|1\d{2}|200),(\d{1,2}|1\d{2}|200)"/);
//   });
// });