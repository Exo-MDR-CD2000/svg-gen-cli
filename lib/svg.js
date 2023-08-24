// Main code that will generate the logo
// import the code fromm 'shapes.js' and create code here that will generate the logo
// the 3 letter requirement should be enforced here

const { generateShape } = require('./shapes'); // this shoudl bring in the shapes.js file

function generateLogo(shapeType, shapeColor, text, textColor) {

    const shape = generateShape(shapeType, shapeColor); // this should generate the shape based on the user input. comes from shapes.js

    let triangleText = "50%"; // default y coordinate for text element
    if (shapeType === "triangle") {
        triangleText = "85%"; // adjust y coordinate for triangle shape
    }

    let fontTriangle = "96"; // default x coordinate for text element
    if (shapeType === "triangle") {
        fontTriangle = "50"; // adjust x coordinate for triangle shape
    }

    const textElement = `<text x="50%" y="${triangleText}" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="${fontTriangle}">${text}</text>`; // this should generate the text based on the user input

    const logo = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${shape}${textElement}</svg>`; // this should generate the logo based on the user input

    return logo; // this should return the logo
}


module.exports = { generateLogo }; // this should export the logo

//<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="50">${text}</text>


//I added code so that the text on the triangle is not clipping the border. I also added code so that the text is centered on the triangle.