//Immediately Invoked Function Expression
// Function is executed right after it is created
// preserve private scope, don't need to worry about overwriting other parts of the code inside the IIFE

let output = (function doubleNumber(num) {
    return num * 2;
})(10);

(function() {
  
    function getTotal(a, b) {
      return a + b;
    }
    
    var $ = 'currency';
    
    if (true) console.log('hello world');

    let total = getTotal(7, 9); 
  })();

 

console.log(output);