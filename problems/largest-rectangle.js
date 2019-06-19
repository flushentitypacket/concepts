// https://www.hackerrank.com/challenges/largest-rectangle/problem

const myRectangles = [1,2,3,4,5]

const largestRectangle = (h) => {
  let largest = 0
  
  h.forEach((height, index) => {
    let i = index
    let j = index
    while (i > 0 && h[i - 1] >= height) { i-- }
    while (j < h.length - 1 && h[j + 1] >= height) { j++ }
    const width = j - i + 1
    largest = Math.max(largest, width * height)
  })

  return largest
}

console.log(largestRectangle(myRectangles))
