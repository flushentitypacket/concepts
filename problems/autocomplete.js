// Implement word autocomplete

const autocomplete = (lookup, s) => {
  let currentNode = lookup
  for (let i = 0; i < s.length; i++) {
    currentNode = currentNode.children.get(s[i])
    if (!currentNode) return []
  }
  return allWords(currentNode, s)
}

const allWords = (node, prefix) => {
  let words = []
  if (node.isWord) words.push(prefix)
  node.children.forEach((child, key) => {
    words = words.concat(allWords(child, prefix + key))
  })
  return words
}

const insertWord = (root, word) => {
  let currentNode = root
  for (let i = 0; i < word.length; i++) {
    const nextNode = currentNode.children.get(word[i])
    if (!nextNode) currentNode.children.set(word[i], createNode())
    currentNode = currentNode.children.get(word[i])
  }
  currentNode.isWord = true
}

const createNode = () => ({
  isWord: false,
  children: new Map(),
})

const myLookup = createNode()

insertWord(myLookup, 'a')
insertWord(myLookup, 'art')
insertWord(myLookup, 'arm')
insertWord(myLookup, 'action')
insertWord(myLookup, 'cab')

console.log(`Expected ${autocomplete(myLookup, 'b')} to return no results`)
console.log(`Expected ${autocomplete(myLookup, 'a')} to be a,art,arm,action`)
console.log(`Expected ${autocomplete(myLookup, 'ar')} to be art,arm`)
console.log(`Expected ${autocomplete(myLookup, 'cab')} to be cab`)
