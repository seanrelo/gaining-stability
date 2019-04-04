/*
*
* This file a simple has function wich validate if a string is a palindrome or not.
*/

const app = {};

app.validatePalindrome = function(str){
  var count = Math.round(str.length/2);
  var palindrome = true;
  for(var i=0;i < count;i++){
    if(str.charAt(i) !== str.charAt(str.length-1-i)){
        palindrome = false;
        i = count;
    }
  }
  return palindrome;
};


module.exports = app;
