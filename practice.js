function returnSum(a, b) {
  return (a + b);
}

// Return the sum of all values in an array
// reduce method reduces the array to a single value and
// applies a function to each element in the array
function simpleArraySum(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  }, 0);
}

// Create a function that takes a base number and exponent number
// and returns the value
function calculateExponent(num, exp) {
  let calc = Math.pow(num, exp);
  return calc;
}

// Return "even" or "odd"
function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "even";
  }
  else {
    return "odd";
  }
}

// Return number of digits
function findDigitAmount(num) {
  return num.toString().length;
}

// Find largest number in an array
function findLargestNum(arr) {
  return Math.max.apply(Math, arr);
}
