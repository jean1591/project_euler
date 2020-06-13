const digitnPowers = (n) => {
	const powers = { 0: 0, 1: 1 };
	for (let i = 2; i < 10; i++) {
		powers[i] = i ** n;
	}

	let sum = 0;
	for (let i = 2; i < 10 ** (n + 1); i++) {
		// Convert i to array of its digits
		const intToArr = String(i).split("").map((i) => Number(i));
		const currentSum = intToArr.reduce((acc, item) => acc + powers[item], 0);

		if (currentSum === i) {
			sum += i;
		}
	}
	return sum;
};
