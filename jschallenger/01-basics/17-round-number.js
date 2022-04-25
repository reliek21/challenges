// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

function myFunction(a) {
    return Math.round(a * 100) / 100;
}


// Other way
// function myFunction(a) {
    // return Number(a.toFixed(2));
// }


console.log(myFunction(2.12397));