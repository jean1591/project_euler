const distinctPowers = (n) => {
	const arr = [];
	for (let a = 2; a <= n; a++) {
		for (let b = 2; b <= n; b++) {
			if (!arr.includes(a ** b)) arr.push(a ** b);
		}
	}

	return arr.length;
};
