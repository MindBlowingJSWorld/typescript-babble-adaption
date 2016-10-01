/*interface LabelledValue {
    label: string;
    size?: number;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
    console.log(labelledObj.size);
}

let myObj = {size: 10, label: "label Object"};
printLabel(myObj);*/

/*interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

function printProperties(object:Object) {
	if(object) {
		var keys = Object.keys(object);

		for(let i=0; i<keys.length; i++) {
			console.log('{Key: '+ keys[i] + ', value: ' + object[keys[i]] + '}');
		}	
	}		
}

let mySquare = createSquare({color: "black"});
printProperties(mySquare);*/

/*interface Point {
	readonly x: number;
	readonly y: number;
};

let p1:Point = {x:10, y:20};*/

// Throws error as readonly property 
//p1.x = 100;

/*** READONLY  */
// let a: number[] = [1, 2, 3, 4];
// let ro: ReadonlyArray<number> = a;
/*ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!*/
//let b = a;

// This is illigal, can not assign readonly to normal array
//a = ro;
// a = ro as number[];

/** property Name not known */

interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}






















