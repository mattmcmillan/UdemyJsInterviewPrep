// tab 1
 
function getTotal() {
    console.log(multiplier);
    console.log(total);
    
    let total = 0;
    
    for(var i = 0; i < 10; i++) {
      
      let valueToAdd = i;
      var multiplier = 2;
      total += valueToAdd * multiplier;
    }
    
    return total;
  }
   
  getTotal();
   
   
   
  // tab 2
   
  function getTotal() {
    let total;
    var multiplier;
    
    total = 0;
    
    for(var i = 0; i < 10; i++) {
      let valueToAdd;
      
      valueToAdd = i;
      multiplier = 2;
      total += valueToAdd * multiplier;
    }
    
    return total;
  }
   
  getTotal();