class MinMaxStack {
	constructor() {
		this.stack = [];
		this.minMax = []
	}
	
  peek() {
		return this.stack[this.stack.length - 1]
  }

  pop() {
		this.minMax.pop()
		return this.stack.pop()
		
	
  }

  push(number) {
		let newMinMax = {"min": number, "max": number}
		
		if (this.minMax.length > 0) {
			let lastMinMax = this.minMax[this.minMax.length - 1]
			
			newMinMax.min = Math.min(number, lastMinMax.min)
			newMinMax.max = Math.max(number, lastMinMax.max)
		} 
		
		this.minMax.push(newMinMax)
		this.stack.push(number)
  }

  getMin() {
  	return this.minMax[this.minMax.length - 1].min
  }

  getMax() {
    return this.minMax[this.minMax.length - 1].max
  }
}