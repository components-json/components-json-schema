'use strict';
var componentsJsonSchema = require('./index.js');
var fs = require('fs');

var x = JSON.parse(fs.readFileSync('./examples/button/components.json', {
  encoding: 'utf8'
}));

var passed = componentsJsonSchema.validate(x);
if (passed) {
  console.log("passed");
} else {
  console.log("did not pass");
}
