interface Shape {
    color: string;
}

interface SquareShape extends Shape {
    sizeOfAllSides: number;
}

/*class Box implements squareShape {

    color: string;
    sizeOfAllSides: number;

    constructor(color: string, sizeOfAllSides: number) {
        this.color = color;
        this.sizeOfAllSides = sizeOfAllSides;
    }
}*/
function printProperties(object:Object) {
	if(object) {
		var keys = Object.keys(object);

		for(let i=0; i<keys.length; i++) {
			console.log('{Key: '+ keys[i] + ', value: ' + object[keys[i]] + '}');
		}	
	}		
}


let square = <SquareShape>{};
square.color = 'Red';
square.sizeOfAllSides = 11;
printProperties(square);

let square1 = <Shape>{};
square1.color = 'Red';
//sizeOfAllSides does not exist in Shape interface
//square1.sizeOfAllSides = 11;
// Just a way to use casting
//(<SquareShape>square1).sizeOfAllSides = 100;
printProperties(square1);
