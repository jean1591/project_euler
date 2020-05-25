const divisibleTriangleNumber = (n) => {
	// Init currentTriangleNb, divs & i
	let currentTriangleNb = 0;
	let divs = [];
	let i = 1;

	// Check length of divs at each iteration
	while (divs.length < n) {
		// Reset divs
		divs = [];

		// Increment currentTriangleNb by i
		currentTriangleNb += i;

		// Find currentTriangleNb's divisors
		divs = findDivisors(currentTriangleNb);

		// Increment i
		i++;
	}

	return currentTriangleNb;
};

const findDivisors = (n) => {
	// Init i and divs
	let i = 2;
	const divs = [ 1 ];

	// Push i and n / i if i is a divisor of n
	while (i <= Math.sqrt(n)) {
		if (n % i === 0) {
			divs.push(i);
			divs.push(n / i);
		}
		i++;
	}

	// Add n to its divisors
	divs.push(n);

	return divs;
};
