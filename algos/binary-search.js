const binarySearch = (list, target) => {
  let currentIndex
  let minIndex = 0
  let maxIndex = list.length - 1

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((maxIndex + minIndex) / 2)
    const currentItem = list[currentIndex]

    if (currentItem > target) {
      maxIndex = currentIndex - 1
    } else if (currentItem < target) {
      minIndex = currentIndex + 1
    } else {
      return currentIndex
    }
  }
  return null
}

const recursiveBinarySearch = (list, target, minIndex, maxIndex) => {
  if (minIndex === undefined) return recursiveBinarySearch(list, target, 0, list.length - 1)
  if (minIndex > maxIndex) return null
  let newMinIndex = minIndex
  let newMaxIndex = maxIndex
  const currentIndex = Math.floor((maxIndex + minIndex) / 2)
  const currentItem = list[currentIndex]
  if (currentItem > target) {
    newMaxIndex = currentIndex - 1
  } else if (currentItem < target) {
    newMinIndex = currentIndex + 1
  } else {
    return currentIndex
  }
  return recursiveBinarySearch(list, target, newMinIndex, newMaxIndex)
}

const list = [1, 3, 4, 5, 6, 9]

console.log(`Expected ${binarySearch(list, 1)} to equal 0`)
console.log(`Expected ${recursiveBinarySearch(list, 1)} to equal 0`)
console.log(`Expected ${binarySearch(list, 2)} to equal null`)
console.log(`Expected ${recursiveBinarySearch(list, 2)} to equal null`)
console.log(`Expected ${binarySearch(list, 8)} to equal null`)
console.log(`Expected ${recursiveBinarySearch(list, 8)} to equal null`)
console.log(`Expected ${binarySearch(list, 5)} to equal 3`)
console.log(`Expected ${recursiveBinarySearch(list, 5)} to equal 3`)
