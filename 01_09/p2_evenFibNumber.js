function fiboEvenSum(n) {
	let a = 1;
	let b = 2;
	let result = b;

	while (a + b < n) {
		const tmp = a;
		a = b;
		b = tmp + b;

		if (b % 2 === 0) {
			result += b;
		}
	}

	return result;
}
