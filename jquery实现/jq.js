function getSiblings(node) {
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
}

function addClass(node, classes) {
    for (let key in classes) {
        var value = calsses[key]
        var methodName = value ? 'add' : 'remove'
        node.classList[methodName](key)
        // if(value) {
        //     node.classList.add(key)
        // } else {
        //     node.classList.remove(key)
        // }
    }
}

//命名空间封装为函数库 1.知道库的名字 2.避免覆盖全局变量
window.dddom = {}
dddom.getSiblings = getSiblings
dddom.addClass = addClass
dddom.getSiblings(item3)
window.dddom = {}
dddom.getSiblings = function (node) {
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
}


//Node + this 
Node.prototype.getSiblings = function () {
    var allChildren = this.parentNode.children
    var siblings = {
        length: 0
    }
    for (let i = 0; i < allChildren.length; i++) {
        if (allChildren[i] !== this) {
            siblings[siblings.length] = allChildren[i]
            siblings.length += 1
        }
    }
    return siblings
}
item3.getSiblings()//隐式调用this
item3.getSiblings.call(item3) //显示指定this

Node.prototype.addClass = function (classes) {
    for (let key in classes) {
        var value = calsses[key]
        var methodName = value ? 'add' : 'remove'
        this.classList[methodName](key)
    }
}
item3.addClass({ a: true, b: false, c: true })
item3.addClass.call(item3, { a: true, b: false, c: true }   )





