// Everything here is commented
console.log("And this is code from a JS File!");

var name1 = "John Doe";
var name2 = 'Jane Doe';

console.log(name1);
console.log(name2);
 
name1 = "Peter's";
console.log(name1);

//Integers
let width = 80;
let height = 50;
let area = width * height;

console.log("width: " + width);
console.log("height: " + height);
console.log("area: " + area);

//Floats
const PI = 3.1415;
var radius = 5;
var circleArea = PI * radius * radius;
console.log(circleArea);

// Booleans
let IsJavaScriptCool = true;
let fearOfJavaScript = false;

if (IsJavaScriptCool) {
    //This will be logged
    console.log("JavaScript is cool");
}

if (fearOfJavaScript) {
    //This won't be logged
    console.log("The fear of JavaScript is false");
}

// Arrays
let students = ["Andrew", "Bernie", "Carl"];
let numbers = [1, 2, 3, 4, 5];

console.log(students);
console.log(numbers);
console.log(students[1]); // Bernie

//Objects
let student = {
    name: "David",
    age: 25,
    isStudent: true,
    country: "Portugal",
}
console.log(student);
console.log(student.country);
