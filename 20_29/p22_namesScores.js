const namesScores = (arr) => {
	let result = 0;

	// Sort array
	arr = arr.sort();

	arr.forEach((word) => {
		result += (arr.indexOf(word) + 1) * calculateWordWorth(word.toLowerCase());
	});

	return result;
};

// Return word worth
const calculateWordWorth = (word) => {
	let result = 0;

	const alpha = "abcdefghijklmnopqrstuvwxyz".split("");

	// Iterate through word and update result
	word.split("").forEach((i) => {
		result += alpha.indexOf(i) + 1;
	});

	return result;
};
