class Student {
	private fullName: string;
	private age: number;
	private major: string;

	/*constructor() {

	}*/

	constructor(fullName: string, age: number, major: string) {
		this.age = age;
		this.fullName = fullName;
		this.major = major;		
	}
}

class Job {
	private isDone: boolean = false;
}

function checkJob() {
	let decimal: number = 6;
	let hex: number = 0xf00d;
	let binary: number = 0b1010;
	let octal: number = 0o744;

	let fullName: string = 'Str';

	// Multiline string wiht ``
	let multiLineAddress: string = 
	`Address 1 
	Address Line 2 
	Address Line 3
	Address Line 4`;

	let names: string[] = ['test1','test2'];

	let numbers1Array: number[] = [1,2,2,3,4];	
	// Any will cover all types
	let numbersArray: any[] = [1,2,2,3,4,'T1','T2'];
}

function enumFunction() {
	enum Color {Red, Green, Black, White};

	let color: Color;
	// Will not work
	//color = green;

	// Will work
	color = Color.Green;


	enum ColorCode {Red =1, Green = 2, black = 3};

	let colorCodes: ColorCode;

	colorCodes = 1;
	console.log(colorCodes);

	console.log(ColorCode.Red);	
}

//enumFunction();

function voidAndNever() {
	let val:void = undefined;
    
    // Will fail as void can be assigned only undefined
	//val = null;
	// Will fail as Strict enabled
	//val = {};
}
//voidAndNever();

function oneBracket() {
	let someValue: any = "this is a string";

	//length does not exist on the Number 
	//let strLength: number = (<number>someValue).length;

	let strLength: number = (<string>someValue).length;
}
//oneBracket();

function asASyntax() {
	let someValue: any = "this is a string";

	let strLength: number = (someValue as string).length;

}

asASyntax();

