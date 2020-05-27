const less10 = {
	1: "one",
	2: "two",
	3: "three",
	4: "four",
	5: "five",
	6: "six",
	7: "seven",
	8: "eight",
	9: "nine"
};

const less20 = {
	11: "eleven",
	12: "twelve",
	13: "thirteen",
	14: "fourteen",
	15: "fifteen",
	16: "sixteen",
	17: "seventeen",
	18: "eighteen",
	19: "nineteen"
};

const tens = {
	10: "ten",
	20: "twenty",
	30: "thirty",
	40: "forty",
	50: "fifty",
	60: "sixty",
	70: "seventy",
	80: "eighty",
	90: "ninety"
};

const hundreds = {
	100: "one hundred",
	200: "two hundred",
	300: "three hundred",
	400: "four hundred",
	500: "five hundred",
	600: "six hundred",
	700: "seven hundred",
	800: "eight hundred",
	900: "nine hundred"
};

const thousands = {
	1000: "one thousand",
	2000: "two thousand",
	3000: "three thousand",
	4000: "four thousand",
	5000: "five thousand",
	6000: "six thousand",
	7000: "seven thousand",
	8000: "eight thousand",
	9000: "nine thousand"
};

const numberText = { ...less10, ...less20, ...tens, ...hundreds, ...thousands };

const numberLetterCounts = (limit) => {
	let result = 0;
	for (let i = 1; i <= limit; i++) {
		result += buildLess1000(i).replace(new RegExp(" ", "g"), "").length;
	}

	return result;
};

// Build words for number lt a 100
const buildLess100 = (num) => {
	const numberStr = String(num);

	// num is lt 20 or in numberText
	if (numberStr in numberText) return numberText[numberStr];

	// num is gt 20 or not in numberText
	const tens = numberStr - numberStr[1];
	const units = numberStr[1];
	return `${numberText[tens]} ${numberText[units]}`;
};

// Build words for number lt a 1000
const buildLess1000 = (num) => {
	const numberStr = String(num);

	// num is in numberText
	if (numberStr in numberText) return numberText[numberStr];

	// num is lt 100
	if (num < 100) return buildLess100(num);

	// num is neither in numberText nor lt 100
	const currentHundredUnit = +numberStr[0];
	return `${numberText[numberStr[0]]} hundred and ${buildLess100(num - currentHundredUnit * 100)}`;
};
