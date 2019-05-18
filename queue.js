class Queue {
  queue = []

  push = (item) => {
    this.queue.push(item)
  }

  pop = () => {
    return this.queue.shift()
  }
}

const queue = new Queue()
queue.push(1)
queue.push(2)
queue.push(3)
queue.push(4)

console.log(`Expected ${queue.pop()} to equal 1`)
console.log(`Expected ${queue.pop()} to equal 2`)
console.log(`Expected ${queue.pop()} to equal 3`)
console.log(`Expected ${queue.pop()} to equal 4`)
