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

// Create smaller grid based on current row "r" & current column "c"
const createSubArr = (arr, r, c) => {
	const subArr1 = arr[r].slice(c, c + 4);
	const subArr2 = arr[r + 1].slice(c, c + 4);
	const subArr3 = arr[r + 2].slice(c, c + 4);
	const subArr4 = arr[r + 3].slice(c, c + 4);
	return [ subArr1, subArr2, subArr3, subArr4 ];
};

// Calculate maximum products from:
// 		Horizonally Left to right
// 		Vertically Top to bottom
// 		Diagonally Top Left to Bottom Right
// 		Diagonally Bottom Left to Top Right
const calcProducts = (subArr) => {
	let hProd, vProd;
	for (let i = 0; i < 4; i++) {
		// Horizontally => i is #row
		hProd = subArr[i].reduce((acc, item) => acc * item, 1);

		// Vertically => is is #column
		vProd = [ subArr[0][i], subArr[1][i], subArr[2][i], subArr[3][i] ].reduce(
			(acc, item) => acc * item,
			1
		);
	}

	// Diagonally Top Left to Bottom Right
	const dProd1 = [ subArr[0][0], subArr[1][1], subArr[2][2], subArr[3][3] ].reduce(
		(acc, item) => acc * item,
		1
	);

	// Diagonally Bottom Left to Top Right
	const dProd2 = [ subArr[0][3], subArr[1][2], subArr[2][1], subArr[3][0] ].reduce(
		(acc, item) => acc * item,
		1
	);

	// return maxProd;
	return Math.max(...[ hProd, vProd, dProd1, dProd2 ]);
};
