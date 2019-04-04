/**
* File for exceute de unit test
*
*/

const unit = require('./unit');

const unitRun = {};

unitRun.runTest = function(){
  var error = [];
  var success = 0;
  var count = 0;
  for(var key in unit){
    count++;
    var f = unit[key];
    console.log('\x1b[33m%s\x1b[0m',"Running test:"+key);
    try{
      f();
      console.log('\x1b[32m%s\x1b[0m','Valid');
      success++;
    }catch(e){
      error.push({
        'name':key,
        'error': e
      });
      console.log('\x1b[31m%s\x1b[0m','Invalid');
    }
  }

  unitRun.showReport(count,error,success);
};

unitRun.showReport = function(total,errors,successes){
  console.log("");
  console.log("--------BEGIN TEST REPORT--------");
  console.log("");
  console.log("Total Tests: ",total);
  console.log("Pass: ",successes);
  console.log("Fail: ",errors.length);
  console.log("");

  // If there are errors, print them in detail
 if(errors.length > 0){
   console.log("--------BEGIN ERROR DETAILS--------");
   console.log("");
   errors.forEach(function(testError){
     console.log('\x1b[31m%s\x1b[0m',testError.name);
     console.log(testError.error);
     console.log("");
   });
   console.log("");
   console.log("--------END ERROR DETAILS--------");
 }
 console.log("");
 console.log("--------END TEST REPORT--------");
 process.exit(0);
}

unitRun.runTest();
module.exports = unitRun;
