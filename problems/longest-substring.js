const longestSubstring = (a,b) => {
  let longest = ''

  for (let i = 0; i < a.length; i++) {
    let currentSubstring = ''
    for (let j = 0; j < b.length; j++) {
      if (b[j] === a[i + currentSubstring.length]) {
        currentSubstring += b[j]
      } else {
        if (currentSubstring.length > longest.length) {
          longest = currentSubstring
        }
        currentSubstring = ''
      }
    }
  }

  return longest
}

console.log(`Expected ${longestSubstring('aaabcaaaaa', 'baaccc')} to equal aa`)
console.log(`Expected ${longestSubstring('baaccc', 'aaabcaaaaa')} to equal aa`)
