const sumAmicableNum = (n) => {
	// Create object with i and sum of i's divisors
	const obj = createObj(n);

	let result = 0;

	// Loop through each number
	Object.keys(obj).forEach((k) => {
		// Current value must be different than 1
		// Current key must be in object's values
		// Current key must be the value of another key
		// Current key cannot be its current value
		if (obj[k] !== 1 && k in Object.values(obj) && obj[obj[k]] === +k && +k !== obj[k]) {
			result += +k;
		}
	});

	return result;
};

// Return divisors of n
const divisorsOfN = (n) => {
	const divs = [ 1 ];

	// Check up to sqrt(n)
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			divs.push(i);
			divs.push(n / i);
		}
	}

	// Check if two last elements are the same
	if (divs[divs.length - 1] === divs[divs.length - 2]) {
		divs.pop();
	}

	return divs;
};

// Sums the elements from arr
const arrSum = (arr) => {
	return arr.reduce((acc, item) => acc + item, 0);
};

// Create object => {i: sumDivs(i)}
const createObj = (n) => {
	const obj = {};

	for (let i = 2; i < n; i++) {
		obj[i] = arrSum(divisorsOfN(i));
	}

	return obj;
};
