// Create a Collatz sequence starting at n, return its size
const createCollatzSequence = (n) => {
	let size = 1;
	while (n !== 1) {
		n = n % 2 === 0 ? n / 2 : n * 3 + 1;
		size++;
	}
	return size;
};

const longestCollatzSequence = (limit) => {
	// Current longest sequence of Collatz
	const longestSeq = { value: -1, size: -1 };

	// {2: 2, 3: 8, 4: 3, 5: 6,...}
	const seq = {};
	for (let i = 2; i < limit; i++) {
		let currentCollatz;

		// Get current sequence length
		if (i / 2 in seq) {
			currentCollatz = seq[i / 2] + 1;
		} else {
			currentCollatz = createCollatzSequence(i);
			currentCollatz = currentCollatz;
		}

		seq[i] = currentCollatz;

		// Check if current length is max
		if (currentCollatz > longestSeq.size) {
			longestSeq.value = i;
			longestSeq.size = currentCollatz;
		}
	}
	return longestSeq.value;
};
