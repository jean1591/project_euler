function maximumPathSumI(triangle) {
	// Rows
	// Init currentRow at second last row & bottomRow at last row, then move up the triangle
	for (let i = triangle.length - 2; i >= 0; i--) {
		let currentRow = triangle[i];
		let bottomRow = triangle[i + 1];

		// Columns
		// Set current value j to the max of (j + bottom, j + bottomRight)
		currentRow.forEach((j, index) => {
			triangle[i][index] = Math.max(...[ j + bottomRow[index], j + bottomRow[index + 1] ]);
		});
	}

	// Return first value of first row
	return triangle[0][0];
}
