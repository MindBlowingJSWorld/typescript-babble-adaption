var Student = (function () {
    /*constructor() {

    }*/
    function Student(fullName, age, major) {
        this.age = age;
        this.fullName = fullName;
        this.major = major;
    }
    return Student;
}());
var Job = (function () {
    function Job() {
        this.isDone = false;
    }
    return Job;
}());
function checkJob() {
    var decimal = 6;
    var hex = 0xf00d;
    var binary = 10;
    var octal = 484;
    var fullName = 'Str';
    // Multiline string wiht ``
    var multiLineAddress = "Address 1 \n\tAddress Line 2 \n\tAddress Line 3\n\tAddress Line 4";
    var names = ['test1', 'test2'];
    var numbers1Array = [1, 2, 2, 3, 4];
    // Any will cover all types
    var numbersArray = [1, 2, 2, 3, 4, 'T1', 'T2'];
}
function enumFunction() {
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Black"] = 2] = "Black";
        Color[Color["White"] = 3] = "White";
    })(Color || (Color = {}));
    ;
    var color;
    // Will not work
    //color = green;
    // Will work
    color = Color.Green;
    var ColorCode;
    (function (ColorCode) {
        ColorCode[ColorCode["Red"] = 1] = "Red";
        ColorCode[ColorCode["Green"] = 2] = "Green";
        ColorCode[ColorCode["black"] = 3] = "black";
    })(ColorCode || (ColorCode = {}));
    ;
    var colorCodes;
    colorCodes = 1;
    console.log(colorCodes);
    console.log(ColorCode.Red);
}
//enumFunction();
function voidAndNever() {
    var val = undefined;
    // Will fail as void can be assigned only undefined
    //val = null;
    // Will fail as Strict enabled
    //val = {};
}
//voidAndNever();
function oneBracket() {
    var someValue = "this is a string";
    //length does not exist on the Number 
    //let strLength: number = (<number>someValue).length;
    var strLength = someValue.length;
}
//oneBracket();
function asASyntax() {
    var someValue = "this is a string";
    var strLength = someValue.length;
}
asASyntax();
