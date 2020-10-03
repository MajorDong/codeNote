function flatten (arr) {
	let result = [];
		arr.forEach( item => {
			if(Array.isArray(item)){
				result = result.concat(flatten(item))
			}else{
				result.push(item)
			}
		});
	return result;
}

function flatten (arr) {
	while(arr.some( item => Array.isArray(item))){
		arr = [].concat(...arr)
	}
	return arr
}

