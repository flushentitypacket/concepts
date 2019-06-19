class Stack {
  stack = []

  push = (item) => {
    this.stack.push(item)
  }

  pop = () => {
    return this.stack.pop()
  }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

console.log(`Expected ${stack.pop()} to equal 4`)
console.log(`Expected ${stack.pop()} to equal 3`)
console.log(`Expected ${stack.pop()} to equal 2`)
console.log(`Expected ${stack.pop()} to equal 1`)
