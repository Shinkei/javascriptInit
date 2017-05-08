//This file is not tranpiled, so we should use ES5 and CommonJS

// Register Babel to transpile before out test run
require('babel-register')();

//Disable webpack features that Mocha does not understand
require.extensions['.css'] = function() {};
