const lookAndSay = (n) => {
  let current = '1'
  for (let i = 0; i < n; i++) {
    current = nextLookAndSay(current)
  }
  return current
}

const nextLookAndSay = (s) => {
  const list = s.split('')
  let currentChar = null
  let currentCount = 0
  let next = ''

  for (let i = 0; i < list.length; i++) {
    if (currentChar === null) {
      currentChar = list[i]
      currentCount += 1
      continue
    }

    if (list[i] === currentChar) {
      currentCount += 1
    } else {
      next += `${currentCount}${currentChar}`
      currentCount = 1
      currentChar = list[i]
    }
  }
  next += `${currentCount}${currentChar}`
  return next
}

console.log(lookAndSay(0))
console.log(lookAndSay(1))
console.log(lookAndSay(2))
console.log(lookAndSay(3))
console.log(lookAndSay(4))
