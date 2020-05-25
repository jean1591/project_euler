const createPascalTriangle = (n) => {
	// Init Pascal's Triangle
	const pascalTriangle = [ [ 1 ], [ 1, 1 ] ];

	// Build Pascal's Triangle
	for (let i = 2; i < n; i++) {
		// Get last row
		const pastRow = pascalTriangle[pascalTriangle.length - 1];

		// Init current row
		const currentRow = [ 1 ];

		// Add elements by pair from previous row to build current row
		for (let a = 0; a < pastRow.length - 1; a++) {
			currentRow.push(pastRow[a] + pastRow[a + 1]);
		}

		// End current row
		currentRow.push(1);

		// Add to Pascal's Triangle
		pascalTriangle.push(currentRow);
	}

	return pascalTriangle;
};

const latticePaths = (gridSize) => {
	// Create Pascal's Triangle up to 2 times gridSize + 1
	const pTriangle = createPascalTriangle(gridSize * 2 + 1);

	// Get element in center
	return pTriangle[pTriangle.length - 1][gridSize];
};
