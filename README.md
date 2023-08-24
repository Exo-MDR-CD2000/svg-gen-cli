# svg-gen-cli
Create a basic SVG logo via CLI. 
## Description
This CLI tool generates a simple SVG image with some text centered. NPM packages inquirer and jest were used to develop this little tool. Testing the code with jest was and still is a learning curve. If I had more time to work on this, I would implement a better test for the text being added to the logo. Testing for shape generation seems to work as it passes the test suite. Besides testing, I did have a more fundamental grasp on classes and module exporting and importing via require.
## Installation
Clone the contents of this repository to your location of choice. The required dependencies are already defined in the package.json file. Simply open the index file in the integrated terminal in VS code and type 'npm i'. This will install inquirer and jest. 

## Usage
Open the repository within your preferred terminal window and invoke the application by typing: 'node index.js'. A series of questions will be given for the shape, shape color, text, and text color. The final SVG file will be saved in the logos directory. As for the color choices, as long as it is a valid CSS color it should work. Open the SVG in your browser of choice to see the logo.

[Usage Tutorial](https://drive.google.com/file/d/1d-NLX6h1vWHqlwLHZN-u4ZrN7WDnfkPk/view)


## Credits

- Class notes on jest testing and inquirer
- SVG documentation [here](https://www.w3schools.com/graphics/svg_intro.asp), [here](https://www.freecodecamp.org/news/svg-rectangle-and-other-svg-shapes/) and [here](https://developer.mozilla.org/en-US/docs/Web/SVG)
- Jest documentation [here](https://jestjs.io/docs/getting-started)

## License
This project is licensed under [![License](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

## Questions
If you have any questions regarding this project, please contact me at my [email](joseguillen587@yahoo.com) or visit my GitHub page at [GitHub Profile](https://github.com/Exo-MDR-CD2000).