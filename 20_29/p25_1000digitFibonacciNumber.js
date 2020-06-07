const digitFibonacci = (n) => {
	// First numbers of Fibonacci Sequence
	let a = 0;
	let b = 1;
	let currentFibNumber = a + b;

	// Iterator - Starts at 2 having a & b previously declared
	let i = 2;
	// Lopp will currentFibNumber is less than 10 power (n-1)
	while (currentFibNumber < Math.pow(10, n - 1)) {
		currentFibNumber = a + b;
		a = b;
		b = currentFibNumber;
		if (String(currentFibNumber).length === n) {
			return i;
		}
		i++;
	}
};
