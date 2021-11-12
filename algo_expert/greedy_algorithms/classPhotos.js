function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
	
	redShirtHeights.sort( (a,b) => {return a - b})
	blueShirtHeights.sort( (a,b) => {return a - b})
	console.log(redShirtHeights)
	console.log(blueShirtHeights)
	
	let backRow = determineBackRow(redShirtHeights[0], blueShirtHeights[0])
	
	console.log(backRow)
	
	if (backRow) {
		for (i = 0; i <= redShirtHeights.length - 1; i++) {
			console.log("backRow =>",determineBackRow(redShirtHeights[i], blueShirtHeights[i]), "index =>", i)
			if (determineBackRow(redShirtHeights[i], blueShirtHeights[i]) != backRow) {
				return false
			} 
		}	
		return true
	} else {
		return false
	}
}