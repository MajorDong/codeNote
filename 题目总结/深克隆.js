function cloneDeep(source, hash = new Map()) {
  if(!isObj(source)) return source;
  if(hash.has(source)) { // 循环引用 map 检查哈希避免
    return hash.get(source)
  }
  const target = Array.isArray(source) ? [] : {};
  hash.set(source, target)  // 设置hash值

  Object.keys(source).forEach( key => {
    if(isObj(source[key])){
      target[key] = cloneDeep(source[key], hash);
    } else {
      target[key] = source[key];
    }
  })
  return target
}

function isObj(value){
  return typeof value === 'object' && value !== null; //处理null为obj
}

var a = {
  name: "Tommy",
  book: {
      title: "You Don't Know JS",
      price: "45"
  },
  a1: undefined,
  a2: null,
  a3: 123,
}