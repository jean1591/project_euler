function largestPalindromeProduct(n) {
	// Find min & max n-digits number
	let l_bound = +(1 + "0".repeat(n - 1));
	let u_bound = l_bound * 10 - 1;
	let largestPal = -1;

	for (let a = u_bound; a > l_bound; a -= 11) {
		// a divisible by 11
		while (a % 11 != 0) {
			a--;
		}

		for (let b = u_bound; b > l_bound; b--) {
			let tmp = a * b;
			const reverseTmp = String(tmp).split("").reverse().join("");

			if (String(tmp) === reverseTmp && tmp > largestPal) {
				largestPal = tmp;
				break;
			}
		}
	}

	return largestPal;
}
