const getLengthReciprocal = (n) => {
	let remain = 10;
	let i = 0;

	while (remain !== 10 || i < 1) {
		// console.log(`${remain} / ${n} = ${Math.floor(remain/n)} * ${n} + ${remain % n}`)
		remain = (remain % n) * 10;
		i++;
	}

	return i;
};

const reciprocalCycles = (n) => {
	let maxi = 0;
	let result = 0;

	for (let i = 3; i < n; i++) {
		if (i % 2 !== 0 && i % 5 !== 0) {
			const currentLength = getLengthReciprocal(i);
			if (currentLength > maxi) {
				maxi = currentLength;
				result = i;
			}
		}
	}

	return result;
};
