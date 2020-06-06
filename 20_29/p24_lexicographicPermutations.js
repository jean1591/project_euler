const lexicographicPermutations = (n) => {
	const numberArr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
	const factoradicNumber = getFactoradicNumber(n);

	let result = [];

	factoradicNumber.forEach((i) => {
		result.push(numberArr[i]);
		numberArr.splice(i, 1);
	});

	return +result.join("");
};

// Return factoradic number of n
const getFactoradicNumber = (n) => {
	let currentDivisors = 1;
	const remainders = [];

	while (n !== 0) {
		const currentRemainder = n % currentDivisors;
		remainders.push(currentRemainder);
		n = Math.floor(n / currentDivisors);
		currentDivisors++;
	}

	return remainders.reverse();
};
