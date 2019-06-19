// Implement Google-style search term autocomplete, results ranked in order of search popularity

const autocomplete = (lookup, s) => {
  let currentNode = lookup
  for (let i = 0; i < s.length; i++) {
    currentNode = currentNode.children.get(s[i])
    if (!currentNode) return []
  }
  // currentNode now pointing at node of the last letter of the search term
  return orderedSearchResults(currentNode, s)
}

const searchResultSets = (node, search) => {
  // Store ordered results as sets to be merged in O(results) complexity
  let searchResultSets = []
  if (node.searchPopularity > 0) {
    searchResults.push([createSearchResult(search, node.searchPopularity)])
  }
  node.children.forEach((child, key) => {
    searchResults.push(orderedSearchResults(child, search + key))
  })
  return searchResults
}

const createLookup = () => ({
  searchPopularity: 0,
  children: new Map(),
  // NOTE: To improve lookup performance, the order of the children based on searchPopularity may be stored such that
  // results may be merged in O(n) time instead of sorted in O(nlogn) time
  // order: [],
})

const createSearchResult = (search, searchPopularity) => ({
  search,
  searchPopularity,
})

// TODO: ordered merge
const merge = (r1, r2) => [...r1, ...r2]

const myLookup = createLookup()
