//Keep track of how many times a function is called
function counterFunc() {
    let count = 0;
    return function() {
        if(count < 4){
            //some computation/functionality
        } else {
            //throw error
        }
        count++;
        return count;
    };
}

const instanceOne = myFunc();
const instanceTwo = myFunc();

console.log('instanceOne: ', instanceOne());
console.log('instanceOne: ', instanceOne());
console.log('instanceOne: ', instanceOne());
console.log('instanceOne: ', instanceOne());
console.log('instanceOne: ', instanceOne());
console.log('instanceOne: ', instanceOne());

console.log('instanceTwo: ', instanceTwo());
console.log('instanceTwo: ', instanceTwo());
console.log('instanceTwo: ', instanceTwo());
