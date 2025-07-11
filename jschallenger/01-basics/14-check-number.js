// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

function myFunction(a) {
    if (a % 1 !== 0) {
        return false;
    } else {
        return true;
    }
}


// Other solution
function myFunction(a) {
    return a - Math.floor(a) === 0
}

console.log(myFunction(1));
