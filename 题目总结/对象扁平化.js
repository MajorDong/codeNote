/**

对象扁平化
说明：请实现 flatten(input) 函数，input 为一个 javascript 对象（Object 或者 Array），返回值为扁平化后的结果。
示例：
var input = {
a: 1,
b: [ 1, 2, { c: true }, [ 3 ] ],
d: { e: 2, f: 3 },
g: null,
}
var output = flatten(input);
output如下
{
"a": 1,
"b[0]": 1,
"b[1]": 2,
"b[2].c": true,
"b[3][0]": 3,
"d.e": 2,
"d.f": 3,
// "g": null, 值为null或者undefined，丢弃
}
/
function flatten() {
代码实现 
}

**/

function flatten(obj) {
	const result = {};

	function flat( preKey, input) {
		if(input) {
			let temp = {};
			if(Object.prototype.toString.call(input) === '[object Object]'){
				for( let key in input) {
					Object.assign(temp, flat(`preKey.${key}`, input[key] ))
				}
			} else if(Array.isArray(input)){
				for(let key in input ) {
					Object.assign(temp, flat(`preKey[${key}]`, input[key]))
				}
			} else {
				temp[preKey] = input;
			}
			return temp;
		}
	}

	for (let key in obj ) {
		Object.assign(result, flat(key, obj[key]))
	}
	return result;
}
