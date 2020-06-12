const spiralDiagonals = (n) => {
	let result = 1;

	let side = 3;
	let num = 1;

	while (side <= n) {
		for (let i = 0; i < 4; i++) {
			num += side - 1;
			result += num;
		}
		side += 2;
	}
	return result;
};
