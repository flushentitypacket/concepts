// type Node = {
//   value: number
//   adjacents: Node[]
// }

const bfs = (root, value) => {
  if (root === null) return null

  let nodes = [root]
  while (nodes.length > 0) {
    const currentNode = nodes.shift()
    if (currentNode.visited) continue
    if (currentNode.value === value) return currentNode 
    currentNode.visited = true
    nodes = nodes.concat(currentNode.adjacents)
  }
  return null
}

const dfs = (root, value) => {
  if (root === null) return null
  if (root.value === value) return root
  if (root.visited) return null
  root.visited = true

  root.adjacents.forEach((node) => {
    const result = dfs(node, value)
    if (result !== null) return result
  })
  return null
}
