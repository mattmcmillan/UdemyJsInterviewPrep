(function() {
    var x = y = 200;
})();

//y gets defined as global variable above and will contain 200
console.log('y: ' + y);
//x is defined within function scope and will return as undefined
console.log('x: '+ x);

// 'use strict'; will also return y as undefined as it does not allow global variables