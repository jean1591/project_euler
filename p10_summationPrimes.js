const primeSummation = (n) => {
	let result = 0;

	for (let i = 1; i < n; i++) {
		if (isPrime(i)) {
			result += i;
		}
	}

	return result;
};

const isPrime = (num) => {
	for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;
	return num > 1;
};
