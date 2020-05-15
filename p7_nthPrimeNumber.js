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
	if (n === 1 || n === 2) return true;

	for (let i = 3; i <= Math.sqrt(n); i += 2) {
		if (n % i === 0) return false;
	}

	return true;
};
