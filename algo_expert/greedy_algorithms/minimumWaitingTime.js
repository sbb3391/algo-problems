function minimumWaitingTime(queries) {
	queries.sort( (a,b) => {return a - b})
	
	console.log(queries)
	let total = 0 
	
	for (i = 0; i < queries.length - 1; i++) {
		let queriesLeft = queries.length - (i + 1)
		let duration = queries[i]
		total += duration * queriesLeft
	}
	
	return total
}