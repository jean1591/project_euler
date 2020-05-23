function largestPrimeFactor(number) {
	const primes = [];

	// Divide number by 2 while possible
	while (number % 2 === 0) {
		primes.push(2);
		number /= 2;
	}

	// When number is odd => while loop from 3 to sqrt(number)
	let i = 3;
	while (i < Math.sqrt(number)) {
		// Divide number by i if possible
		if (number % i === 0) {
			primes.push(i);
			number /= i;
		}
		i++;
	}

	// sqrt(number) is prime
	if (number > 2) {
		primes.push(number);
	}

	return Math.max(...primes);
}
