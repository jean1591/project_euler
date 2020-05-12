const smallestMult = (n) => {
	// Multiplier of n
	let mult = 1;

	// Check if n * mult can be divied by all numbers from 2 to n
	while (!isDiv(n * mult, n)) {
		mult++;
	}

	return n * mult;
};

const isDiv = (a, b) => {
	/*
  @param    a   int   Number to divide
  @param    b   int   Max value to divide a by
  Return true if a can be divided by all numbers from 2 to b
  */
	for (let i = b; i >= 2; i--) {
		if (a % i !== 0) {
			return false;
		}
	}
	return true;
};
