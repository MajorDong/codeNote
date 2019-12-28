let div1 = document.createElement('div')
div1.className = 'demo'

document.body.appendChild(div1)

let dragging 
let startX
let startY
div1.addEventListener('mousedown', (e) =>{
  dragging = true
  startX = e.clientX
  startY = e.clientY
})

document.body.addEventListener('mousemove',(e) =>{
  if(dragging === true) {
    let lastX = e.clientX
    let lastY = e.clientY
    let distX = lastX - startX
    let distY = lastY - startY
    // div1.style.top = NaN 
    let top = parseInt(div1.style.top) || 0
    // 这里想到一个蛮有意思的点 js只能获取到内联演示所以内联样式有很高的优先级
    div1.style.top = top + distY + 'px'
    let left = parseInt(div1.style.left) || 0
    div1.style.left = left + distX + 'px'
    startX = lastX
    startY = lastY
  }
})

div1.addEventListener('mouseup', ()=>{
  dragging = false
})