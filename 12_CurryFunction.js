function getProduct(num1, num2) {
    return num1 * num2;
}

//Curryed
function getProduct(num1) {
    return function (num2) {
        return num1 * num2;
    }
}

function getTravelTime(distance) {
    return function(time){
        return distance/speed;
    };
}

const travelTimeFromNycToBoston = getTravelTime(400);
travelTimeFromNycToBoston(30);
travelTimeFromNycToBoston(50);
travelTimeFromNycToBoston(70);
