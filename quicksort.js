const swap = (list, i, j) => {
  const iVal = list[i]
  const jVal = list[j]
  list[i] = jVal
  list[j] = iVal
}

const partition = (list, minIndex, maxIndex) => {
  const pivotIndex = maxIndex
  const pivot = list[pivotIndex]
  // Build a sub-list such that:
  // list[minIndex .. i-1] < pivot
  // list[i .. j] >= pivot
  let i = minIndex
  for (let j = minIndex; j < maxIndex; j++) {
    if (list[j] < pivot) {
      swap(list, i, j)
      i += 1
    }
  }
  // Now make it such that
  // [...less than pivot, pivot, ...greater than pivot]
  swap(list, i, pivotIndex)

  // i is the new index for the pivot
  return i
}

const list = [3,7,8,5,2,1,9,5,4]

const partitionIndex = partition(list, 0, list.length -1)
console.log(`Expected ${list} to be partitioned on 4`)
console.log(`Expected partition index ${partitionIndex} to equal 3`)

const quicksort = (list, minIndex, maxIndex) => {
  if (minIndex >= maxIndex) return // base case list of length 0 or 1
  const partitionIndex = partition(list, minIndex, maxIndex)
  quicksort(list, minIndex, partitionIndex - 1)
  quicksort(list, partitionIndex + 1, maxIndex)
}

const list2 = [3,7,8,5,2,1,9,5,4]

quicksort(list2, 0, list2.length - 1)
console.log(`Expected ${list2} to be sorted`)
