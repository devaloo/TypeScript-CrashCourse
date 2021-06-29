"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

exports.__esModule = true;
var message = "Hello World !!";
console.log(message);

// To transpile TypeScript to JavaScript
//      tsc main.ts 
//      node main.js


// Scoping
// TypeScript has block level scoping
// "let" can be declared and assigned independently...Cant be redeclared
// "const" should be initialized while declaring only

var a = 10;
var name = 'Deva';
a = 20;
var sum;
sum = 20;

// Datatypes

var isAvailable = true;
var myName = "Deva";
var myAge = 21;
var myGreet = "Hello,\n    My name is " + myName + " and I am " + myAge + " years old.";
console.log(myGreet);
var n = null;
var u = undefined;
var isFree = undefined;
var otherName = null;
var list1 = [1, 2, 3];
var list2 = [1, 2, 4];
var listNames = ["devs", "pavs", "rams", "krans"];
var person1 = ["Kranthi", 22]; // Tuple
var Techstack;
(function (Techstack) {
    Techstack[Techstack["WordPress"] = 4] = "WordPress";
    Techstack[Techstack["MEAN"] = 5] = "MEAN";
    Techstack[Techstack["MERN"] = 6] = "MERN";
    Techstack[Techstack["Java"] = 7] = "Java";
    Techstack[Techstack["Python"] = 8] = "Python";
})(Techstack || (Techstack = {}));
;
var devaStack = Techstack.MEAN;
console.log(devaStack); // 5


// // Any type
// let anyVar: any = 10;
// anyVar = "deva";
// anyVar = false;
// console.log(anyVar.name());
// anyVar.toUpperCase();

// // Unknown type
// let unknownVar: unknown = 10;
// unknownVar = "deva";
// unknownVar = true;
// (unknownVar as string).toLowerCase();


// Multitype or union of datatypes

var multiType;
multiType = 25;
multiType = "Deva Kumar";

// Functions
// Optional Parameters - put ? at the end of parameterName
// Default Parameters - initialize in the parameters
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
sum = add(5, 15);
console.log("Sum : " + sum);
function addName(fname, lname) {
    if (lname)
        return fname + " " + lname;
    else
        return fname;
}
var fullName = addName("Deva");
console.log("Full Name: " + fullName);
function printEmployeeDetails(person) {
    console.log("\n    Name: " + person.firstName + " " + person.lastName + " \n    Age: " + person.age + "\n    #Phone: " + person.phone + "\n    Salary: " + person.isSalaried);
}
var deva = {
    firstName: "Deva",
    lastName: "Kumar",
    age: 21,
    phone: 9876543210,
    isSalaried: true
};
printEmployeeDetails(deva);

// Class
var Student = /** @class */ (function () {
    function Student(name) {
        this.Name = name;
    }
    Student.prototype.greet = function () {
        console.log("Good Morning, " + this.Name);
    };
    return Student;
}());
var s1 = new Student("Deva");
s1.greet();
console.log(s1.Name);

// Inheritance
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name) {
        return _super.call(this, name) || this;
    }
    Teacher.prototype.assignTask = function () {
        console.log("Teacher assigns task to students");
    };
    return Teacher;
}(Student));
var t1 = new Teacher("Angela Yu");
t1.greet();
t1.assignTask();
console.log(t1.Name);


// Access Modifiers
// By default, all the attributes and methods are public
// We use access modifier as prefix to attributes and methods 
// public    -->  for free accessibility
// private   -->  not accessible outside the own class
// protected -->  only accessible inside base class and derived class
