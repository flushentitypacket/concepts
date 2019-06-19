// O(n)
const getCandidates = (list) => {
  const candidates = []
  let candidateItem = null
  let count = 0
  let startIndex = null
  list.forEach((item, index) => {
    if (candidateItem === null) {
      startIndex = index
      candidateItem = item
      count = 1
      return
    }

    if (item === candidateItem) {
      count += 1
    } else {
      if (count >= 3) {
        const candidate = [...list]
        candidate.splice(startIndex, count)
        candidates.push(candidate)
      }
      startIndex = index
      candidateItem = item
      count = 1
    }
  })

  return candidates
}

// O(n^2) 
// - getCandidates: O(n)
// - crush: called O(n) times
const crush = (list) => {
  // With worst case n/3 candidates, i.e. O(n)
  const candidates = getCandidates(list)

  if (candidates.length <= 0) return list
  // Depth worst case logn
  const results = candidates.map((candidate) => crush(candidate))

  // O(n) to determine best result
  let bestResult = list
  results.forEach((result) => {
    if (result.length < bestResult.length) bestResult = result
  })
  return bestResult
}

console.log(`Expected ${crush([1, 3, 3, 3, 2, 2, 2, 3, 1])} to equal 1, 1`)
console.log(`Expected ${crush([3,1,2,2,2,1,1,1,2,2,3,1,1,2,2,2,1,1,1,2,3])} to equal 3,1,3,2,3`)
