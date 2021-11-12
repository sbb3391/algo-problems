function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.
	
	redShirtSpeeds.sort( (a,b) => {return a - b})
	blueShirtSpeeds.sort( (a,b) => {return a - b})
	
	let sum = 0;
	
	if (!fastest) { redShirtSpeeds.sort( (a,b) => { return b - a})}
	
	for (i = 0, j = redShirtSpeeds.length - 1; i < redShirtSpeeds.length; i++, j--) {
		const a = redShirtSpeeds[i]
		const b = blueShirtSpeeds[j]
		
		sum += Math.max(a, b)
	}
	
  return sum
}