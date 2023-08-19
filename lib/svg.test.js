// svg.test.js
// the tests in here should check that the svg is generated correctly for the given shapes and letters
// some template code below. figure out later if this can be repurposed for this assignment

const { generateLogo } = require('./svg');

describe('generateLogo', () => {
  test('should generate an SVG logo with the correct shapes and letters', () => {
    const logo = generateLogo('square', 'circle', 'triangle', 'ABC');
    expect(logo).toEqual(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">' +
        '<rect x="0" y="0" width="100" height="100" />' +
        '<circle cx="200" cy="200" r="50" />' +
        '<polygon points="100,300 200,200 300,300" />' +
        '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">ABC</text>' +
      '</svg>'
    );
  });
});





// const { generateLogo } = require('./svg');

// describe('generateLogo', () => {
//   test('should generate an SVG logo with no more than 3 letters on the shape', () => {
//     const logo = generateLogo('square', 'circle', 'triangle', 'ABCD');
//     const regex = /<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">.{1,3}<\/text>/;
//     expect(logo).toMatch(regex);
//   });
// });