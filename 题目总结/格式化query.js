// 入参格式参考：
const url = "http://sample.com/?a=1&b=2&c=xx&d#hash";
// 出参格式参考：
const result = { a: "1", b: "2", c: "xx", d: "" };

function querySearch(url) {
  const startIndex = url.indexOf('?');
  const lastIndex = url.indexOf('#');
  const queryArr = url.slice(startIndex+1, lastIndex).split('&');
  const res ={};
  queryArr.forEach((item) => {
    let itemArr = item.split('=');
    if(itemArr[1] === undefined) {
      itemArr[1] = ''
    }
    res[itemArr[0]]= itemArr[1]
  })
  return res
}

querySearch(url);