const largeSum = (arr) => {
	const sum = arr.reduce((acc, item) => acc + +item, 0);
	return +String(sum).slice(0, 1).concat(String(sum).slice(2, 11));
};
