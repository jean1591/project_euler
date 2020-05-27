const countingSundays = (firstYear, lastYear) => {
	const startDate = new Date(`${firstYear}-01-01`);
	const lastDate = new Date(`${lastYear}-12-31`);
	let count = 0;

	const dateDiff = Math.round((lastDate - startDate) / (1000 * 60 * 60 * 24));

	for (let i = 0; i <= dateDiff; i++) {
		if (startDate.getDate() === 1 && startDate.getDay() === 0) {
			count++;
		}
		startDate.setDate(startDate.getDate() + 1);
	}
	return count;
};
