interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

// Print Function
function printProperties(object:Object) {
	if(object) {
		var keys = Object.keys(object);

		for(let i=0; i<keys.length; i++) {
			console.log('{Key: '+ keys[i] + ', value: ' + object[keys[i]] + '}');
		}	
	}		
}

let square = <Square>{};

square.sideLength = 10;
square.penWidth = 10;
square.color = 'red';

printProperties(square);