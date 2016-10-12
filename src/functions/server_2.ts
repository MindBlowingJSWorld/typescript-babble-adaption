
/**
 * Step 3:  number of paramters not know
 */

function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName1 = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

let employeeName2 = buildName("Joseph", "Samuel", "Lucas", "MacKinzie", "1", "2", "3","4");

// Possible to pass values as array to ellipsis
let valuesArray = ["Samuel", "Lucas", "MacKinzie", "1", "2", "3","4"];
let employeeName3 = buildName('Joseph1', valuesArray);

console.log(employeeName1);

console.log(employeeName2);

console.log(employeeName3);