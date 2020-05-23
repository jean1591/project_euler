const largestGridProduct = (arr) => {
	let maxProd = 0;

	for (let r = 0; r <= arr.length - 4; r++) {
		for (let c = 0; c <= arr.length - 4; c++) {
			// Create subArr from current position
			const subArr = createSubArr(arr, r, c);

			// Calculate products
			const currentMaxProd = calcProducts(subArr);
			currentMaxProd > maxProd ? (maxProd = currentMaxProd) : null;
		}
	}

	return maxProd;
};

const createSubArr = (arr, r, c) => {
	const subArr1 = arr[r].slice(c, c + 4);
	const subArr2 = arr[r + 1].slice(c, c + 4);
	const subArr3 = arr[r + 2].slice(c, c + 4);
	const subArr4 = arr[r + 3].slice(c, c + 4);
	return [ subArr1, subArr2, subArr3, subArr4 ];
};

const calcProducts = (subArr) => {
	let maxProd = 0;
	for (let i = 0; i < 4; i++) {
		// Horizontal Product
		const hProd = subArr[i].reduce((acc, item) => acc * item, 1);
		hProd > maxProd ? (maxProd = hProd) : null;
		// Vertical Product
		const vProd = [ subArr[0][i], subArr[1][i], subArr[2][i], subArr[3][i] ].reduce(
			(acc, item) => acc * item,
			1
		);
		vProd > maxProd ? (maxProd = vProd) : null;
	}

	// Diagonal Product
	const dProd1 = [ subArr[0][0], subArr[1][1], subArr[2][2], subArr[3][3] ].reduce(
		(acc, item) => acc * item,
		1
	);
	dProd1 > maxProd ? (maxProd = dProd1) : null;
	const dProd2 = [ subArr[0][3], subArr[1][2], subArr[2][1], subArr[3][0] ].reduce(
		(acc, item) => acc * item,
		1
	);
	dProd2 > maxProd ? (maxProd = dProd2) : null;

	return maxProd;
};
