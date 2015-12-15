/* 1410601024, fhs37246
   * Philipp Welsch
   * ue02 bsp21    */
   
$(document).ready(function () {
  function Triangle (A, B, C) {
    this.A = A
    this.B = B
    this.C = C
  }

  function middlePoint (first, second) {
    return {x: ((first.x + second.x) / 2), y: ((first.y + second.y) / 2)}
  }

  function sum (x) {
    if (x == 0)
      return 1
    return Math.pow(3, x) + sum(x - 1)
  }

  function sierpinski (triangles, depth) {
    if (depth == 0) {
      draw(triangles)
      return
    }
    var temp = []
    triangles.forEach(function (t) {
      var mAB = middlePoint(t.A, t.B),
        mAC = middlePoint(t.A, t.C),
        mBC = middlePoint(t.B, t.C)
      temp.push(new Triangle(t.A, mAB, mAC),
        new Triangle(mAB, t.B, mBC),
        new Triangle(mAC, mBC, t.C))
    })
    triangles = temp.slice(0)
    console.log(triangles)
    sierpinski(triangles, depth - 1)
  }

  function draw (triangle) {
    triangle.forEach(function (t) {
      context.beginPath()
      context.stroke()
      context.moveTo(t.A.x, t.A.y)
      context.lineTo(t.B.x, t.B.y)
      context.stroke()
      context.lineTo(t.C.x, t.C.y)
      context.stroke()
      context.moveTo(t.A.x, t.A.y)
      context.lineTo(t.C.x, t.C.y)
      context.stroke()
    })
  }

  var c = document.getElementById('canvas')
  var context = c.getContext('2d')
  context.fillStyle = '#000'
  context.lineWidth = 0.5

  var elements = []
  elements.push(new Triangle({x: 600, y: 1000}, {x: 1400, y: 1000}, {x: 1000, y: 350}))
  sierpinski(elements, window.location.search.replace('?', ''))
  console.log(elements.length)
})
