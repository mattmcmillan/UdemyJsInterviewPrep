// tab 1
 
console.log(color);
 
var color = "blue";
 
console.log(color);
 
 
 
//tab 2
 
var color;
 
console.log(color);
 
color = "blue";
 
console.log(color);
 
 
 
// tab 3
 
console.log(getProduct(2, 3));
 
var getProduct = function(num1, num2) {
  return num1 * num2;
};
 
console.log(getProduct(2, 3));
 
 
 
// tab 4
 
console.log(getProduct(2, 3));
 
function getProduct(num1, num2) {
  return num1 * num2;
}
 
 
 
// tab 5
 
var globalVar = 'global';
 
(function() {
  
  var name = 'Jen';
  
  var getAge = function() {
    return '30';
  };
  
  function getState() {
    return 'Delaware'; 
  }
  
})();