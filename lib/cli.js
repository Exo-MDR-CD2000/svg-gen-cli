// code that will incorporate the command line interface
// will have a questions array that will be used to prompt the user for information

const inquirer = require('inquirer'); // this should bring in the inquirer package
const fs = require('fs'); // this should bring in the fs package to write the file
const path = require('path'); // this should bring in the path package to create the file path


const { generateLogo } = require('./svg'); // grabs the generateLogo function from svg.js

class LogoGenerator {
    constructor() {
        this.shapeChoices = ['square', 'circle', 'triangle'];
    }

    generate() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'shape',
                    message: 'What shape would you like to use?',
                    choices: this.shapeChoices
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'What color would you like to use for the shape?'
                },
                {
                    type: 'input',
                    name: 'text',
                    message: 'What text would you like to use? Enter up to 3 characters.',
                    validate: function (text) {
                        if (text.length > 3) {
                            return 'Please enter no more than 3 characters.';
                        }
                        return true;
                    },
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'What color would you like to use for the text?'
                },
            ])

            .then(answers => {
                const { shape, shapeColor, text, textColor } = answers;
                const logo = generateLogo(shape, shapeColor, text, textColor);
                const filename = `${shape}-${text}.svg`;
                const filepath = path.join(__dirname, '..', 'logos', filename);
                fs.writeFileSync(filepath, logo);
                console.log(`Your logo has been created at ${filepath}`);
            });
    }
}

//now export this class to the index.js file

module.exports = LogoGenerator;

