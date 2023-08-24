// code that will incorporate the command line interface
// will have a questions array that will be used to prompt the user for information
// use inquirer to prompt the user for their github username and email

const inquirer = require('inquirer');
const fs = require('fs');
const { generateLogo } = require('./svg');