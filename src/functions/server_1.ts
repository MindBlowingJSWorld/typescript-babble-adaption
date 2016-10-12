
/**
 * Step 1 : Simple functions with Type assignment 
 */
/*function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x: number, y: number): number { return x+y; };

let myAdd1: (x: number, y: number)=>number =
    function(x: number, y: number): number { return x+y; };

let myAdd2: (baseValue:number, increment:number) => number =
    function(x: number, y: number): number { return x + y; };

console.log(myAdd2(10, 20));

function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // error, too few parameters
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right

*/



/**
 * Step 2: Option, Required vs default parameters,  but it need to be exact numbers 
 */
function buildName(firstName?: string, lastName = "Smith", title?: string) {
    return title + firstName + " " + lastName;
}


let result = buildName();                        // NaN Smith
let result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
let result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
let result3 = buildName("Bob", "Adams", "Sr. ");  // error, too many parameters

let result4 = buildName("Bob", "Adams");         // ah, just right

console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);