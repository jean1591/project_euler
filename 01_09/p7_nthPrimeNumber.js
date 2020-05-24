const nthPrime = (n) => {
	let count = 2; // [2, 3]
	let numberTest = 3;

	while (count < n) {
		numberTest += 2;
		if (isPrime(numberTest)) {
			count++;
		}
	}
	return numberTest;
};

const isPrime = (n) => {
	// Even number cannot be prime except 2
	if (n % 2 === 0) return false;

	for (let i = 3; i <= Math.sqrt(n); i += 2) {
		if (n % i === 0) return false;
	}

	return n > 1;
};
