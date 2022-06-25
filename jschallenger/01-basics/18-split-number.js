// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

function myFunction(a) {
  return String(a).split('').map((item) => Number(item));
}

myFunction(193278)

// other solution
function myFunction(a) {
  const string = a + '';
  const strings = string.split('');
  return strings.map(digit => Number(digit))
}