const sumOfNonAbundantNumbers = (n) => {
	// Array of abundant numbers
	const abundants = getAbundantsToN(n);
	let result = 0;

	// Array of size n filled wil false values
	const arrResult = new Array(n).fill(false);

	for (let i = 0; i < abundants.length; i++) {
		for (let j = i; j < abundants.length; j++) {
			if (!(abundants[i] + abundants[j] > n) && !(abundants[i] + abundants[j] > 28123)) {
				arrResult[abundants[i] + abundants[j]] = true;
			}
		}
	}

	arrResult.forEach((i, index) => {
		if (!i) {
			result += index;
		}
	});

	return result;
};

// Get n's divisors
const getDivisors = (n) => {
	const divs = [ 1 ];

	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			divs.push(i);
			if (n / i !== i) {
				divs.push(n / i);
			}
		}
	}

	return divs;
};

// Get all abundant numbers from 12 to n
const getAbundantsToN = (n) => {
	const abundants = [ 12 ];
	for (let i = 13; i <= n; i++) {
		let isMultiple = false;

		// i is a multiple of a number from abundants => push to abundants
		for (let abIndex = 0; abIndex < abundants.length; abIndex++) {
			if (i % abundants[abIndex] === 0) {
				abundants.push(i);
				isMultiple = true;
				break;
			}
		}

		if (!isMultiple) {
			// i is abundant => push to abundants
			const currentDivisors = getDivisors(i);
			const currentDivisorsSum = currentDivisors.reduce((acc, item) => acc + item, 0);
			if (currentDivisorsSum > i) {
				abundants.push(i);
			}
		}
	}

	return abundants;
};
