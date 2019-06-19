const flip = (list, endIndex) => {
  return [
    ...list.slice(0, endIndex + 1).reverse(), 
    ...list.slice(endIndex + 1),
  ]
}

console.log(`Expected ${flip(['a', 'b', 'c', 'd'], 3)} to equal c,b,a,d`)

const pancakeSort = (list, endIndex) => {
  if (endIndex === undefined) return pancakeSort(list, list.length - 1)
  if (endIndex <= 0) return list

  // Iterate through, constantly moving the largest value to index 0
  for (let end = 1; end <= endIndex; end++) {
    if (list[end] > list[0]) {
      list = flip(list, end)
    }
  }
  // Move largest value to the end
  list = flip(list, endIndex)
  // Value at endIndex is now in a correctly sorted position!
  // Recurse on the rest of the list
  return pancakeSort(list, endIndex - 1)
}

console.log(`Expected ${pancakeSort([1,4,6,8,4,6,9,2,5])} to be sorted`)
