const sumSquareDifference = (n) => {
	return getSquareSum(n) - getSumSquared(n);
};

const getSumSquared = (n) => {
	let result = 0;
	for (let i = 1; i <= n; i++) {
		result += i ** 2;
	}
	return result;
};

const getSquareSum = (n) => {
	let result = 0;
	for (let i = 1; i <= n; i++) {
		result += i;
	}
	return result ** 2;
};
