/* 1410601024, fhs37246
   * Philipp Welsch
   * ue02 bsp09    */
   
$(document).ready(function () {
  var c = document.getElementById('canvas')
  var context = c.getContext('2d')
  context.fillStyle = '#000'

  function position (depth, index) {
    var node = {}
    node.x = index * myTree.canvasWidth / (Math.pow(2, depth) + 1)
    node.y = (depth * myTree.canvasHeight / myTree.treeDepth) + 15
    node.depth = depth
    node.index = index
    return node
  }

  function calcTree (tree, drawingLevel) {
    if(drawingLevel > tree.treeDepth)
    return
    for (var i = 1; i <= Math.ceil(Math.pow(2, drawingLevel)); i++) {
      var node = position(drawingLevel, i)
      tree.nodes.push(node)
    }
    calcTree(tree, drawingLevel + 1)
  }

  function drawTree () {
    myTree.nodes.forEach(function (node) {
      context.beginPath()
      context.arc(node.x, node.y, 1, 0, 2 * Math.PI)
      context.stroke()
      var leftChild = myTree.nodes.filter(function (child) {
        return child.depth == node.depth + 1
          && child.index == node.index * 2 - 1
      })
      console.log(leftChild)
      var rightChild = myTree.nodes.filter(function (child) {
        return child.depth == node.depth + 1
          && child.index == node.index * 2
      })
      context.moveTo(node.x, node.y)
      context.lineTo(leftChild[0].x, leftChild[0].y)
      context.stroke()
      context.moveTo(node.x, node.y)
      context.lineTo(rightChild[0].x, rightChild[0].y)
      context.stroke()
    })
  }

  var myTree = {
    canvasWidth : c.width,
    canvasHeight : c.height,
    treeDepth : window.location.search.replace('?', ''),
    nodes : []
  }

  calcTree(myTree, 0)
  drawTree()
  console.log(myTree.nodes)
})
