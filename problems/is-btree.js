// type Node = {
//   data: number | null
//   left: Node
//   right: Node
// }

const isBtree = (node) => {
  // Node is an empty tree
  if (node.data === null) return true
  // Node is a leaf
  if (node.left.data === null) return true

  const isLeftValid = node.left.data < node.data
  const isRightValid = node.right.data === null ||
    node.right.data >= node.data

  if (!isLeftValid || !isRightValid) return false
  return isBtree(node.left) && isBtree(node.right)
}
