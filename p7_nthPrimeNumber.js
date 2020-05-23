const nthPrime = (n) => {
	let count = 2;
	let numberTest = 3;

	while (count < n) {
		numberTest += 2;
		if (isPrime(numberTest)) {
			count++;
		}
	}

	console.log(n, numberTest);
	return numberTest;
};

const isPrime = (n) => {
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) return false;
	}

	return n > 1;
};
