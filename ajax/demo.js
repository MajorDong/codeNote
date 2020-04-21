aButton.addEventListener('click',(e)=> {
  let request = new XMLHttpRequest
  request.open('get','/xxx')//配置。open(method, url, asyns, user, password)后3个参数可选
  request.onreadystatechange = () => {
    if(request.readyState === 4){
      if(request.status >=200 && request.status < 300){
        console.log('请求成功')
        console.log(typeof request.responseText)
        console.log(request.responseText)
        let string = request.responseText
        // 把符合JSON语法的字符串转换为JavaScript对应的值
        let object = window.JSON.parse(string)
        console.log(typeof object)
        console.log(object)
        console.log(object.note)
      }else if(request.status >= 400){
        console.log('请求失败')
      }
    }
  }
  request.send()
})

// 后端代码
}else if(path === '/xxx'){
  response.statusCode = 200
    response.setHeader('Content-Type', 'text/json;charset=utf-8')
    response.setHeader('Access-Control-Allow-Origin', 'http://frank.com:8001')
    response.wtite(`{
      "note": {
        "to": "dongdong"
        "from": "小瓜太郎"
        "content": "hi"  
      }
    }`)
    response.end()
}

window.jQuery = function(nodeOrSelector){
  let nodes = {}
  nodes.addClass = function(){}
  nodes.html = function(){}
  return nodes
}
window.$ = window.jQuery

window.Promise = function(fn){ //Promise的简单原理
  // ...
  return {
    then: function(){}
  }
}

window.jQuery.ajax = function({url,method,body,headers}){// es6解构赋值
  return new Promise(function(resolve,reject){
    let request = new XMLHttpRequest()
    request.open(method,url)
    for(let key in headers){
      let value = headers[key]
      request.setRequestHeader(key,value)
    }
    request.onreadystatechange = (e) => {
      if(request.readyState === 4){
        if(request.status >= 200 && request.status < 300){
          resolve.call(undefined,request.responseText)
        }else if (request.status >= 400){
          reject.call(nudefined,request)
        }
      }
    }
    request.send(body) //若是POST
  })
}

aButton.addEventListener('click', (e) => {
  let promise1 = window.jQuery.ajax({
    url:'/xxx',
    method:'get',
    headers: {
      'content-type':'application/x-www-form-urlencoded',
      'frank': '18'
    }
  })

  promise1.then( //在不知道回调函数名字的情况下，拿到绑定的参数
    (text) => {console.log(text)},
    (request) => {console.log(request)}
  )  
})

button.addEventListener('click' , (e) =>{
  let request = new XMLHttpRequest()
  request.open('GET', '/xxx', true)
  request.onreadystatechange = ()=>{
    if(request.readyState === 4){
      if((request.statusCode >=200 && request.statusCode <=300) || request.statusCode ===304){
        let str = request.responseText 
        let obj = JSON.parse(str)
      }
    }else{
      console.log('请求失败')
    }
  }
  request.send()
})