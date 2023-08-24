// main file where to start the server

const CLI = require('./lib/cli'); // this should bring in the CLI class from cli.js

const cli = new CLI(); // this should create a new instance of the CLI class

cli.generate(); // this should call the generate method on the cli instance