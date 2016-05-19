'use strict';
var componentsJsonSchema = require('./index.js');
var fs = require('fs');
var filePath = process.argv[2];
var fileContents = fs.readFileSync(filePath, 'utf8');
var parsedContents = JSON.parse(fileContents);

var passed = componentsJsonSchema.validate(parsedContents);
if (passed) {
  console.log("passed: ", filePath);
} else {
  console.log("did not pass: ", filePath);
  process.exit(1);
}