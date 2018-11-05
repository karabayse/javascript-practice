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
