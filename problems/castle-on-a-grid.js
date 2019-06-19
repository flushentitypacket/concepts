// https://www.hackerrank.com/challenges/castle-on-the-grid/problem

// 0 is free
// 1 is wall
const myGrid = [
  [0,0,0,0],
  [0,1,1,0],
  [0,0,1,0],
]

const solve = (grid, startX, startY, endX, endY) => {
  const visited = {}
  let options = [{
    x: startX,
    y: startY,
    steps: 0,
  }]

  while (options.length > 0) {
    const currentOption = options.shift()
    if (currentOption.x === endX && currentOption.y === endY) return currentOption.steps
    if (visited[`${currentOption.x},${currentOption.y}`]) continue

    console.log('Exploring option', currentOption.x, currentOption.y, 'with steps', currentOption.steps)

    const nextOptions = getOptions(grid, currentOption.x, currentOption.y).map((option) => ({
      x: option.x,
      y: option.y,
      steps: currentOption.steps + 1,
    }))
    options = options.concat(nextOptions)
    visited[`${currentOption.x},${currentOption.y}`] = true
  }
  return null
}

const getOptions = (grid, posX, posY) => {
  const leftX = posX - 1
  const leftY = posY
  const rightX = posX + 1
  const rightY = posY
  const upX = posX
  const upY = posY - 1
  const downX = posX
  const downY = posY + 1
  
  const options = []
  if (validPosition(grid, leftX, leftY)) options.push({x: leftX, y: leftY})
  if (validPosition(grid, rightX, rightY)) options.push({x: rightX, y: rightY})
  if (validPosition(grid, upX, upY)) options.push({x: upX, y: upY})
  if (validPosition(grid, downX, downY)) options.push({x: downX, y: downY})
  return options
}

const validPosition = (grid, x, y) => {
  // within bounds
  return y >= 0 && y < grid.length
    && x >= 0 && x < grid[0].length
  // is a free space
    && grid[y][x] === 0
}

console.log(solve(myGrid, 0, 0, 3, 2))
