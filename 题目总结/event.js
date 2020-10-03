//使用 ECMAScript（JS）代码实现一个事件类Event，包含下面功能：绑定事件、解绑事件和派发事件。

class Event {
  constructor(){
    this._cache = {}
  }
  on(type, callback){
    this._cache[type] = this._cache[type] || []
    let fns = this._cache[type]
    if(!fns.includes(callback)){
      fns.push(callback)
    }
    return this
  }
  trigger(type, data){
    let fns = this._cache[type]
    if(Array.isArray(fns)){
      fns.forEach((callbackFn) =>{
        callbackFn(data)
      })
    }
    return this
  }
  off(type, callback){
    let fns = this._cache[type]
    if(Array.isArray(fns)){
      if(callback){
        let index = fns.indexOf(callback)
        if(fns.includes(callback)){
          fns.splice(index,1)
        }
      }else{
        fns.length = 0
      }
    }
    return this
  }
}








