const getLeftChildIndex = (parentIndex) => 2 * parentIndex + 1
const getRightChildIndex = (parentIndex) => 2 * parentIndex + 2
const getParentIndex = (childIndex) => Math.floor((childIndex - 1) / 2)

const swapAtIndexes = (list, aIndex, bIndex) => {
  const aValue = list[aIndex]
  const bValue = list[bIndex]
  list[aIndex] = bValue
  list[bIndex] = aValue
}

// Sift down for a max heap.
// Assumes the heap rooted at `brokenHeap[minIndex]` has children that are valid heaps.
const maxSiftDown = (brokenHeap, minIndex, maxIndex) => {
  const rootIndex = minIndex
  const leftChildIndex = getLeftChildIndex(rootIndex)
  const rightChildIndex = getRightChildIndex(rootIndex)
  // Base case: A leaf is a valid heap!
  if (leftChildIndex > maxIndex) return

  let maxValueIndex = rootIndex
  if (brokenHeap[leftChildIndex] > brokenHeap[maxValueIndex]) {
    maxValueIndex = leftChildIndex
  }
  if (rightChildIndex <= maxIndex && brokenHeap[rightChildIndex] > brokenHeap[maxValueIndex]) {
    maxValueIndex = rightChildIndex
  }

  if (maxValueIndex === rootIndex) {
    // No swaps need be made, so result is: 
    // - children are still valid heaps (no changes made)
    // - heap at rootIndex is confirmed valid
    return
  } else {
    // Move the larger child to the root position
    swapAtIndexes(brokenHeap, rootIndex, maxValueIndex)
    // Sift down on the newly-swapped child
    maxSiftDown(brokenHeap, maxValueIndex, maxIndex)
  }
}

const maxHeapify = (brokenHeap) => {
  for (let i = brokenHeap.length - 1; i >= 0; i--) {
    maxSiftDown(brokenHeap, i, brokenHeap.length)
  }
}

const list = [4,3,5,1,9]
maxHeapify(list)
console.log(`Expected ${list} to be a binary heap`)

const heapSort = (list) => {
  maxHeapify(list)
  for (let i = list.length - 1; i > 0; i--) {
    swapAtIndexes(list, i, 0)
    maxSiftDown(list, 0, i - 1)
  }
}

const sortMe = [4,3,5,1,9]
heapSort(sortMe)
console.log(`Expected ${sortMe} to equal 1,3,4,5,9`)

const maxSiftUp = (brokenHeap, minIndex, maxIndex) => {
  if (minIndex > maxIndex) return

  const parentIndex = getParentIndex(maxIndex)
  if (brokenHeap[maxIndex] > brokenHeap[parentIndex]) {
    swapAtIndexes(brokenHeap, maxIndex, parentIndex)
    maxSiftUp(brokenHeap, minIndex, parentIndex)
  }
}

const maxHeapInsert = (heap, insert) => {
  heap.push(insert)
  maxSiftUp(heap, 0, heap.length - 1)
}

const heapToInsert = [4,3,5,1,9]
maxHeapify(heapToInsert)
maxHeapInsert(heapToInsert, 11)
console.log(`Expected ${heapToInsert} to be a binary heap with 11 inserted once`)

const maxHeapExtract = (heap) => {
  swapAtIndexes(heap, 0, heap.length - 1)
  maxSiftDown(heap, 0, heap.length - 2)
  return heap.pop()
}

const heapToExtract = [4,3,5,1,9]
maxHeapify(heapToExtract)
const sorted = []
const len = heapToExtract.length
for (let i = 0; i < len; i++) {
  sorted.push(maxHeapExtract(heapToExtract))
}
console.log(`Expected ${sorted} to equal 1,3,4,5,9`)
