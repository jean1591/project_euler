const specialPythagoreanTriplet = (n) => {
	for (let i = 2; i <= 100; i++) {
		for (let j = 1; j < i; j++) {
			const pythTriplet = genPythTriplet(i, j);
			const pythTripletSum = pythTriplet.reduce((acc, item) => acc + item);

			if (pythTripletSum > n) {
				break;
			}
			if (pythTripletSum === n) {
				return pythTriplet.reduce((acc, item) => acc * item);
			}
		}
	}
};

// Generate a Pythagorean triplet given m & n such as m > n
const genPythTriplet = (m, n) => {
	if (m <= n) return false;
	return [ m ** 2 - n ** 2, 2 * m * n, m ** 2 + n ** 2 ];
};
