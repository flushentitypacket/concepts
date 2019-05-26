const longestSubstringWithoutRepeatingCharacters = (s) => {
  const indexByChar = {}
  let startIndex = 0
  let longest = ''
  let i = 0

  for (i; i < s.length; i++) {
    const currentChar = s[i]
    const lastSeenAtIndex = indexByChar[currentChar]
    if (lastSeenAtIndex !== undefined) {
      // Have seen this char
      const substring = s.substring(startIndex, i)
      if (substring.length > longest.length) longest = substring
      startIndex = Math.max(lastSeenAtIndex + 1, startIndex)
    }
    indexByChar[currentChar] = i
  }
  const substring = s.substring(startIndex, i)
  if (substring.length > longest.length) longest = substring

  return longest
}

console.log(`Expected ${longestSubstringWithoutRepeatingCharacters('CODINGISAWESOME')} to equal NGISAWE`)

