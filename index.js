'use strict';
var Validator = require('jsonschema').Validator;
var v = new Validator({
  throwError: true
});
var fs = require('fs');
var schema = JSON.parse(fs.readFileSync('./components-schema.json', {
  encoding: 'utf8'
}));

function validate(fileContents) {
  var results = v.validate(fileContents, schema);
  // uncomment for details
  // console.log(results);
  if (results.errors.length === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  validate: validate
}
