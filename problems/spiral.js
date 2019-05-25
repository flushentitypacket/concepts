// 01 02 03 04
// 12 13 14 05
// 11 16 15 06
// 10 09 08 07

const RIGHT = 'right'
const DOWN = 'down'
const LEFT = 'left'
const UP = 'up'

const nextDirection = (currentDirection) => {
  if (currentDirection === RIGHT) {
    return DOWN
  } else if (currentDirection === DOWN) {
    return LEFT
  } else if (currentDirection === LEFT) {
    return UP
  } else {
    return RIGHT
  }
}

const goDirection = (ary, row, col, direction) => {
  const destination = {
    row,
    col,
  }
  if (direction === RIGHT) {
    destination.col += 1
  } else if (direction === LEFT) {
    destination.col -= 1
  } else if (direction === DOWN) {
    destination.row += 1
  } else if (direction === UP) {
    destination.row -= 1
  }
  if (destination.row < 0 || destination.row > ary.length - 1) return null
  if (destination.col < 0 || destination.col > ary.length - 1) return null
  return destination
}

const spiral = (n) => {
  const ary = Array(n).fill(null).map(() => Array(n).fill(null))

  // Clockwise fill
  let current = {
    row: 0,
    col: 0,
  }
  let direction = RIGHT
  ary[0][0] = 1
  let counter = 2

  while (counter <= Math.pow(n, 2)) {
    const next = goDirection(ary, current.row, current.col, direction)
    const isHitWall = next === null
    const isHitValue = () => ary[next.row][next.col] !== null
    if (isHitWall || isHitValue()) {
      direction = nextDirection(direction)
    } else {
      ary[next.row][next.col] = counter
      counter += 1
      current = next
    }
  }

  return ary
}

console.log(spiral(1))
console.log(spiral(2))
console.log(spiral(5))