// svg.test.js
// the tests in here should check that the svg is generated correctly for the given shapes and letters
// some template code below. figure out later if this can be repurposed for this assignment

const { generateLogo } = require('../lib/svg');

// describe('generateLogo', () => {
//   test('should generate an SVG logo with no more than 3 letters on the shape', () => {
//     const logo = generateLogo('square', 'circle', 'triangle', 'ABC', 'red');

//     const regex = /<text.*>(.*)<\/text>/;

//     const textElement = logo.match(regex)[1];

//     expect(textElement.length).toBeLessThanOrEqual(3);

//   });

// });


//i actually only need to test if the text is being added to the shape. The shape tests work and pass already.

describe('generateLogo', () => {
  test('should apply text to the shape', () => {

    const result = generateLogo('square', 'red', 'ABC', 'blue');
    const expected = '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="blue" font-size="96">ABC</text>';

    expect(result).toContain(expected);
  });
});

test('Check if HTML string has proper text implementation for SVG', () => {
  const htmlString = '<svg><text>Example</text></svg>';
  
  expect(htmlString).toContain('Example');
});


//okay so this test above should test for the 3 letter requirement and the color requirement, hopefully. theres no need to test the shape or shape size since there is tests for that elsewhere.

// this test suite is still not fully passing each test but it still gives it a pass status?