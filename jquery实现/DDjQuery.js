window.jQuery = function(nodeOrSelector) {//操作多个节点
    let nodes = {}
    if(typeof nodeOrSelector === 'string') {
        let temp = document.querySelectorAll(nodeOrSelector)//伪数组
        for(let i = 0; i < temp.length; i++) {
            nodes[i] = temp[i] //这里要定义nodes的类型了 否则报错undefined
        }
        nodes.length = temp.length // 纯净伪数组
    } else if(nodeOrSelector instanceof Node) {
        nodes = {
            0: nodeOrSelector,
            length: 1
        }
    }

    nodes.addClass = function(classes) {
        classes.forEach((value) => {
            for(let i = 0; i < nodes.length; i++) {
                nodes[i].classList.add(value)
            }  
        })
    }

    nodes.text = function(text) {
        if(text === undefined) {
            texts = []
            for(let i = 0; i < nodes.length; i++) {
                texts.push(nodes[i].textConent)
            }
            return texts
        }else {
            for(let i = 0; i < nodes.length; i++) {
                nodes[i].textConent = text
            }
        }
    } 
    return nodes
}   

var node2 = jQuery('ul > li')
var $node2 = $('ul > li')
node2.addClass(['blue'])
var text = node2.text()
node2.text('hi')
node2[0].classList.add('blue') //封伪数组 加几个api return出去 
$nodes = $('ul > li') //这个对象式jq构造的 
window.$ = jQuery

$nodes.toggleClass('red') //开关 切换 
$nodes.addClass
$nodes.addClass(function(index,currentClass){
    return 'c-' + index //return classes[index]
})
$nodes.removeClass().addClass()//链式操作
// text() 不给参数为get 给参数为set
//如何用一些简单的API   jQ

