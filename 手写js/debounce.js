let command 
document.body.onscroll = function(){
  console.log('这里每次都执行')
  if(command){
    clearTimeout(command)
  }
  command = setTimeout(() => {
    console.log('这里执行在滚动有间隔')
  }, 1000);
}

//封装一个debounce函数 装饰者模式
let fn = function(){
  console.log('这里在有间隔是执行')
}
debunceFn = debounce(fn, 1000)

function debounce (fn , wait) {
  let timer = null
  return function(){
    if(timer){
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, wait);
  }
}

document.body.onscroll = debunceFn