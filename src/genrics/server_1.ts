function identity(arg: number): number {
    return arg;
}

/** Generic in one way */
function identity_any(arg: any): number {
    return arg;
}

/** Generic in Full Way */
function identity_generic<T>(arg: T): T {
    return arg;
}

/** Generic in Full Way with arrays */
function identity_generic_Array<T>(arg: T[]): T {
    console.log('length of array :', arg.length)
    return arg;
}

let output = identity_generic<string>("myString");  // type of output will be 'string'
console.log(output);

let output1 = identity_generic("myString_1_2");  // type of output will be 'string'
console.log(output1);

let output2 = identity_generic(12343);  // type of output will be 'number'
console.log(output2);

let output3 = identity_generic_Array([1,2,3,4,5,6,7,8]);  // type of output will be 'number'
console.log(output3);

let myIdentity: <T>(arg: T) => T = identity_generic_Array;