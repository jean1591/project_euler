const quadraticPrimes = (range) => {
	// [a, b, consecutive primes count]
	let currentLongest = [ 0, 0, 0 ];

	// Nested loop from -range to range
	for (let a = -range + 1; a < range; a++) {
		for (let b = -range; b <= range; b++) {
			let currentSize = qPrimes(a, b);
			if (currentSize >= currentLongest[2]) {
				currentLongest = [ a, b, currentSize ];
			}
		}
	}
	return currentLongest[0] * currentLongest[1];
};

// Check if num is prime
const isPrime = (num) => {
	num = Math.abs(num);

	if (num % 2 === 0) {
		return false;
	}

	for (let i = 3; i <= Math.sqrt(num); i += 2)
		if (num % i === 0) {
			return false;
		}
	return num > 1;
};

// Return number of consecutives primes from n = 0
const qPrimes = (a, b) => {
	let n = 0;
	let current = n ** 2 + a * n + b;
	while (isPrime(current)) {
		n++;
		current = n ** 2 + a * n + b;
	}

	return n;
};
