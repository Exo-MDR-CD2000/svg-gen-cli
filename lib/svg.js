// Main code that will generate the logo
// import the code fromm 'shapes.js' and create code here that will generate the logo
// the 3 letter requirement should be enforced here

const { generateShape } = require('./shapes'); // this shoudl bring in the shapes.js file

function generateLogo(shapeType, shapeColor, text, textColor) {

    const shape = generateShape(shapeType, shapeColor); // this should generate the shape based on the user input. comes from shapes.js

    const textElement = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>`; // this should generate the text based on the user input
    //  const textElement = `<text x="150" y="100" fill="${textColor}" font-size="50" text-anchor="middle" dominant-baseline="central">${text}</text>`;

    const logo = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${shape}${textElement}</svg>`; // this should generate the logo based on the user input

    return logo; // this should return the logo
}


module.exports = { generateLogo }; // this should export the logo