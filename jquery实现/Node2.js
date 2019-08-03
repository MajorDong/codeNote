window.jQuery = function(nodeOrSelector) {
    let node //操纵一个节点
    if(typeof nodeOrSelector === 'string') {
        node = document.querySelector(nodeOrSelector)
    }else {
        node = nodeOrSelector
    } 
    return {
        getSiblings: function () {
            var allChildren = node.parentNode.children
            var siblings = {
                length: 0
            }
            for (let i = 0; i < allChildren.length; i++) {
                if (allChildren[i] !== node) {
                    siblings[siblings.length] = allChildren[i]
                    siblings.length += 1
                }
            }
            return siblings
        },
        addClass: function(classes) {
            for (let key in classes) {
                var value = calsses[key]
                var methodName = value ? 'add' : 'remove';  
                node.classList[methodName](key)
            }
        }
    }
}

var node2 = jQuery('#item3') //存的地址 
  node2.getSiblings()
node2.addClass({ a: true, b: false, c: true }) 

//jQuery就是一个升级的dom，它接受一个元素，返回你一个新的对象，这个新的对象有新的API,
//它们内部是怎么实现的呢？还是去调旧的domAPI,只不过一句话就相当于十句话，一个循环。
//返回一个jQuery对象
//jQ是一个返回对象的函数 
// 闭包 


