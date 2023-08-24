// svg.test.js
// the tests in here should check that the svg is generated correctly for the given shapes and letters
// some template code below. figure out later if this can be repurposed for this assignment

const { generateLogo } = require('../lib/svg');

describe('generateLogo', () => {
  test('should generate an SVG logo with no more than 3 letters on the shape', () => {
    const logo = generateLogo('square', 'circle', 'triangle', 'ABC', 'red');

    const regex = /<text.*>(.*)<\/text>/;

    const textElement = logo.match(regex)[1];

    expect(textElement.length).toBeLessThanOrEqual(3);

  });

});


//okay so this test above should test for the 3 letter requirement and the color requirement, hopefully. theres no need to test the shape or shape size since there is tests for that elsewhere.

// const { generateLogo } = require('./svg');

// describe('generateLogo', () => {
//   test('should generate an SVG logo with no more than 3 letters on the shape', () => {
//     const logo = generateLogo('square', 'circle', 'triangle', 'ABCD');
//     const regex = /<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">.{1,3}<\/text>/;
//     expect(logo).toMatch(regex);
//   });
// });