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
		divs = findDivisor(currentTriangleNb);

		// Increment i
		i++;
	}

	return currentTriangleNb;
};

const findDivisor = (n) => {
	// Init i and divisors
	let i = 2;
	const divs = [ 1 ];

	// Check if n is divisable by i from i to sqrt(n)
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
