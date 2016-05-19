'use strict';
var componentsJsonSchema = require('./index.js');
var fs = require('fs');
var glob = require('glob');

glob('./examples/**/components.json', function(err, files) {
  files.forEach(function(file) {
    fs.readFile(file, 'utf8', function(err, fileContents) {
      var parsedContents = JSON.parse(fileContents);
      var passed = componentsJsonSchema.validate(parsedContents);
      if (passed) {
        console.log("passed: ", file);
      } else {
        console.log("did not pass: ", file);
        process.exit(1);
      }
    });
  });
});
