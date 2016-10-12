

/*interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;*/

// This will throw error, as third method argument is not defined
// mySearch = function(source: string, subString: string, testString: string) {
/*mySearch = function (source, subString) {
    let result = source.search(subString);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
}*/

interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

// Error thrown, as myStr expecting a number, but signature says it will return a string
//let myStr: number = myArray[0];
let myStr: string = myArray[0];

console.log(myStr);
