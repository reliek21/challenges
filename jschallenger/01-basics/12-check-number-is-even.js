// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

function myFunction(a) {
    if (a % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// Other solution
function myFunction(a) {
    return a % 2 === 0
}


console.log(myFunction(10));

