const primeSummation = (n) => {
	let result = 2;

	for (let i = 1; i < n; i++) {
		if (isPrime(i)) {
			result += i;
		}
	}

	return result;
};

const isPrime = (num) => {
	if (num % 2 === 0) return false;
	for (let i = 3; i <= Math.sqrt(num); i += 2) if (num % i === 0) return false;
	return num > 1;
};
