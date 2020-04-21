class LinkedList {
  constructor() {
    this.length = 0
    this.head = null

    this.Node = class Node {
      constructor(element) {
        this.element = element
        this.next = null
      }
    }
  }
  //尾部追加数据
  append(element) {
    let newNode = new this.Node(element)
    if (this.head === null) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next !== null) {
        current = current.next
      }
      current.next = newNode
    }
    this.length++
  }
  //链表的toString方法
  toString() {
    let current = this.head
    let listString = ''

    while (current) {
      listString = listString + ',' + current.element
      current = current.next
    }
    return listString.slice(1)
  }
  //任意位置插入
  insert(position, element) {
    //1. 处理越界问题
    if (position < 0 || position > this.length) return false
    //2. 找到正确位置，插入数据
    let newNode = new this.Node(element)
    let current = this.head
    let prev = null
    let index = 0
    //3. 判断是否在第一个位置插入
    if (position === 0) {
      this.head = newNode
      newNode.next = current
    } else {
      while (index = index + 1 < position) {
        prev = current
        current = current.next
      }
      prev.next = newNode
      newNode.next = current
    }
    this.length++
    return true
  }
  //任意位置移除
  removeAt(position){
    //1.检查越界问题：越界移除失败返回null
    if(position < 0 || position >= this.length) return null
    //2.定义变量，保存信息
    let current = this.head
    let previous = null
    let index = 0
    //判读是否移除第一项
    if(position === 0) {
      this.head = current.next
    } else {
      while(index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = current.next
    }
    //4 length - 1
    this.length--
    //5 返回移除的数据
    return current.element
  }
  
}