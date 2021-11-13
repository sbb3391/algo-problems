function taskAssignment(k, tasks) {
  // Write your code here.
	
	let sortedTasks = [...tasks].sort( (a, b) => {return a - b })
	let pairs = []
	
	let indicesHashMap = {}
	
	for (i = 0; i < tasks.length; i++) {
		if (indicesHashMap[tasks[i]]) {
			indicesHashMap[tasks[i]].push(i)
		} else {
			indicesHashMap[tasks[i]] = [i]
		}
	}
	
	i = 0
	let j = tasks.length - 1
	while (i < j) {
		console.log(indicesHashMap)
		console.log(tasks)
		let smallest = indicesHashMap[sortedTasks[i]][0]
		let largest = indicesHashMap[sortedTasks[j]][0]
		let newPair = [smallest, largest]
		
		pairs.push(newPair)
		
		indicesHashMap[sortedTasks[i]].shift()
		indicesHashMap[sortedTasks[j]].shift()
		i++
		j--
	
	}
						 
	return pairs;
}