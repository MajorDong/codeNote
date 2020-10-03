//应用比如说博客的自动保存
//从上一次命令结束开始的一定时间范围t内，如果多次连续下达命令，则只执行当前时间段内第一次命令
let gapTime = 3000 //3秒执行一次
let lastTime = null
let nowTime = null
let fn = function(){
  console.log('我执行了')
}

document.body.onscroll = function(){
  nowTime = Date.now
  if(!lastTime || (nowTime - lastTime) > gapTime){
    fn()
    lastTime = nowTime
  } 
}

//封装
let fn = function(){
  console.log('我执行了')
}
throttleFn = throttle(fn, 3000)

function throttle(fn, gapTime) {
  let lastTime = null
  let nowTime = null
  return function(){
    nowTime = Date.now()
    if(!lastTime || (nowTime - lastTime > gapTime)){
      fn()
      lastTime = nowTime
    } 
  }
} 

document.body.onscroll = throttleFn

function th (fn, gapTime) {
	let lastTime = null;
	let nowTime = null;
	return function(){
		nowTime = new Date();
		if(!lastTime || (nowTime - lastTime > gapTime)) {
			fn.apply(undefined, arguments)
			lastTime = nowTime;
		}
	}
}

