// Merge: given 2 sorted lists, combine to make 1 sorted list

// NOTE: `merge` mutates listA and listB
const merge = (listA, listB) => {
  const merged = []
  while (listA.length > 0 && listB.length > 0) {
    if (listA[0] <= listB[0]) {
      merged.push(listA.shift())
    } else {
      merged.push(listB.shift())
    }
  }
  return [...merged, ...listA, ...listB]
}

// NOTE: `safeMerge` does not mutate listA or listB
const safeMerge = (listA, listB) => {
  const merged = []
  let aIndex = 0
  let bIndex = 0
  while (aIndex < listA.length && bIndex < listB.length) {
    const aValue = listA[aIndex]
    const bValue = listB[bIndex]
    if (aValue <= bValue) {
      merged.push(aValue)
      aIndex += 1
    } else {
      merged.push(bValue)
      bIndex += 1
    }
  }
  return merged
    .concat(listA.slice(aIndex))
    .concat(listB.slice(bIndex))
}

const listA = [1, 3, 4, 5]
const listB = [1, 2, 6]

console.log(`Expected ${safeMerge(listA, listB)} to equal 1,1,2,3,4,5,6`)

const splitList = (list) => {
  const splitIdx = Math.floor(list.length / 2)
  return [list.slice(0, splitIdx), list.slice(splitIdx)]
}

const mergeSort = (list) => {
  if (list.length <= 1) return list
  const [left, right] = splitList(list)
  const sortedLeft = mergeSort(left)
  const sortedRight = mergeSort(right)
  return safeMerge(sortedLeft, sortedRight)
}

const list = [6,5,3,1,4,8,7,2,4]
console.log(`Expected ${mergeSort(list)} to equal 1,2,3,4,4,5,6,7,8`)
