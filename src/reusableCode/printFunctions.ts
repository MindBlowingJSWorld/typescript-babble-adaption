// Print Function
function printProperties(object:Object) {
	if(object) {
		var keys = Object.keys(object);

		for(let i=0; i<keys.length; i++) {
			console.log('{Key: '+ keys[i] + ', value: ' + object[keys[i]] + '}');
		}	
	}		
}