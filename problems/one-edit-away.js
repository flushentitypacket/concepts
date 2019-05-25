// *******
// PROBLEM
// *******

//  Write a function to return if two words are exactly "one edit" away, where an edit is:
//
// Inserting one character anywhere in the word (including at the beginning and end)
// Removing one character
// Replacing exactly one character

// ********
// SOLUTION
// ********

// Inserting 1 character and removing 1 character are really the same case
// [a,b,c] vs [a,c]
// Can become equal with either 1 removal in the first array or 1 insertion in the second
const isOneInsertAway = (a, b) => {
  const aryA = a.split('')
  const aryB = b.split('')

  if (Math.abs(aryA.length - aryB.length) !== 1) return false
  let shorter = aryA.length > aryB.length ? aryB : aryA
  const longer = aryB.length > aryA.length ? aryB : aryA

  for(let i = 0; i < longer.length; i++) {
    if (shorter[i] !== longer[i]) {
      shorter = [...shorter.slice(0, i), longer[i], ...shorter.slice(i)]
      break
    }
  }

  return shorter.join() === longer.join()
}

console.log(`Expected ${isOneInsertAway('abc', 'abcd')} to be true`)
console.log(`Expected ${isOneInsertAway('abcd', 'abc')} to be true`)
console.log(`Expected ${isOneInsertAway('abcd', 'abd')} to be true`)
console.log(`Expected ${isOneInsertAway('aa', 'aaa')} to be true`)
console.log(`Expected ${isOneInsertAway('abcc', 'abd')} to be false`)
console.log(`Expected ${isOneInsertAway('a', 'bb')} to be false`)
console.log(`Expected ${isOneInsertAway('abc', 'abcde')} to be false`)

// Replacing 1 character means only 1 difference in the sequence, i.e. must be same length
// [a,b,c] vs [a,x,c]

const isOneReplaceAway = (a,b) => {
  const aryA = a.split('')
  const aryB = b.split('')

  if (aryA.length !== aryB.length) return false

  for(let i = 0; i < aryA.length; i++) {
    if (aryA[i] !== aryB[i]) {
      aryB[i] = aryA[i]
      break
    }
  }

  return aryA.join() === aryB.join()
}

console.log(`Expected ${isOneReplaceAway('abc', 'axc')} to be true`)
console.log(`Expected ${isOneReplaceAway('xab', 'aab')} to be true`)
console.log(`Expected ${isOneReplaceAway('ab', 'abc')} to be false`)
console.log(`Expected ${isOneReplaceAway('abc', 'a')} to be false`)

const isOneEditAway = (a,b) => {
  return isOneInsertAway(a,b) || isOneReplaceAway(a,b)
}
