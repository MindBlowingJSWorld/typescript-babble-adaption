/*function letAndConstAndVar() {
    var a = 10;
    return function g() {
        var b;
        b = a + 1;

        return b;
    }
}*/
//var g = letAndConstAndVar();
//console.log(g());
/*function f() {
    var a = 1;

    a = 2;
    var b = g();
    a = 3;

    return b;

    function g() {
        return a;
    }
}*/
//console.log(f()); // returns '2'
/*function f(shouldInitialize: boolean) {
    var x: number = 0;
    if (shouldInitialize) {
        x = 10;
    }

    return x;
}

console.log(f(true));  // returns '10'
console.log(f(false)); // returns 'undefined'
*/
/*function sumMatrix(matrix: number[][]) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
            setTimeout(function() {
                console.log(i);
            }, 100 * i);
        }
    }

    return sum;
}*/
/*var matrix: number[][] = [1,2,3][3,3,3];
sumMatrix(matrix);*/
/*for (var i = 0; i < 10; i++) {
    console.log('Before : ', i);
    setTimeout(function() {
        console.log(i);
    }, i = 100 * i);
    console.log('after : ', i);
}
*/
var hello = "Hello!";
