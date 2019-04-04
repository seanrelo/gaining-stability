/**
* This file has the unit test functions
*
*/

const lib = require('../app/lib');
var assert = require('assert');

const unit = [];

unit['validate-valid-case'] = function(){
   var res = lib.validatePalindrome('abcdcba');
   assert.equal(res, true);
};


unit['validate-invalid-case'] = function(){
  var res = lib.validatePalindrome('abcddca');
  assert.equal(res, false);
};

unit['validate-invalid-number-case'] = function(){
  var res = lib.validatePalindrome(1234);
  assert.equal(res, false);
};


module.exports = unit;
