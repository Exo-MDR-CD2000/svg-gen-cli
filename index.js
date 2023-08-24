// main file where to start the server

const LogoGenerator = require('./lib/cli.js'); // this should bring in the CLI class from cli.js

const logoGenerator = new LogoGenerator(); // this should create a new instance of the CLI class

logoGenerator.generate(); // this should call the generate method on the cli instance