// write tests for the shapes library
// must use shapes: square, circle, triangle
// jest will be used to run the tests

//exaple code below not finished

const { generateShape } = require('../lib/shapes');

describe('generateShape', () => {
  test('generates a square', () => {
    const shape = generateShape('square', 'red');
    expect(shape).toContain('<rect x="0" y="0" width="300" height="200" fill="red" />');
  });
  
  test('generates a circle', () => {
    const shape = generateShape('circle', 'blue');
    expect(shape).toContain('<circle cx="150" cy="100" r="100" fill="blue" />');
  });
  
  test('generates a triangle', () => {
    const shape = generateShape('triangle', 'green');
    expect(shape).toContain('<polygon points="0,200 150,0 300,200" fill="green" />');
  });
  
  test('throws an error for invalid shape', () => {
    expect(() => generateShape('invalid', 'red')).toThrow('Invalid shape: invalid');
  });
});

//so code above tests for size of each shape as well as color. It should pass no matter what color is used.

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


