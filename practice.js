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

// Create a function that takes a number (from 1 to 12) and
// return its corresponding month name as a string
function month_name(num) {
	if (num === 1) {
		return 'January';
	}
	else if (num === 2) {
		return 'February';
	}
	else if (num === 3) {
		return 'March';
	}
	else if (num === 4) {
		return 'April';
	}
	else if (num === 5) {
		return 'May';
	}
	else if (num === 6) {
		return 'June';
	}
	else if (num === 7) {
		return 'July';
	}
	else if (num === 8) {
		return 'August';
	}
	else if (num === 9) {
		return 'September';
	}
	else if (num === 10) {
		return 'October';
	}
	else if (num === 11) {
		return 'November';
	}
	else if (num === 12) {
		return 'December';
	}
	else {
		return null;
	}
}

// Create a function that takes an array and a string as arguments and
// return the index of the string
function find_index(arr, str) {
	for (let i = 0; i <= arr.length; i++) {
		return arr.indexOf(str);
	}
}

// Create a function that takes an array of numbers and
// returns the smallest number in the set
function findSmallestNum(arr) {
	return Math.min.apply( Math, arr );
}

// Create a function that takes a string as its argument and
// returns the string in reversed order.
function reverse(str) {
	return str.split("").reverse().join("");
}
