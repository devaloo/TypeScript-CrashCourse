export {}

let message = "Hello World !!";
console.log(message);

// To transpile TypeScript to JavaScript
//      tsc main.ts 
//      node main.js

// Scoping
// TypeScript has block level scoping
// "let" can be declared and assigned independently...Cant be redeclared
// "const" should be initialized while declaring only

let a = 10;
const name = 'Deva';

a = 20;

let sum;
sum = 20;

// Datatypes

let isAvailable: boolean = true;
let myName: string = "Deva";
let myAge: number = 21;

let myGreet: string = `Hello,
    My name is ${myName} and I am ${myAge} years old.`;

console.log(myGreet);

let n: null = null;
let u: undefined = undefined;

let isFree: boolean = undefined;
let otherName: string = null;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,4];
let listNames: Array<string> = ["devs","pavs","rams","krans"];

let person1: [string, number] = ["Kranthi", 22];  // Tuple

enum Techstack {WordPress=4, MEAN, MERN, Java, Python};

let devaStack: Techstack = Techstack.MEAN;
console.log(devaStack);  // 5

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
let multiType: number | string;
multiType = 25;
multiType = "Deva Kumar";

// Functions
// Optional Parameters - put ? at the end of parameterName
// Default Parameters - initialize in the parameters

function add(num1: number, num2: number = 10) {
    return num1 + num2;
}
sum = add(5,15);
console.log("Sum : "+sum);

function addName(fname: string, lname?: string): string  {
    if (lname)
    return fname + " " + lname;
    else
    return fname;
}
let fullName = addName("Deva");
console.log("Full Name: " + fullName);

// Interface (separate datatypes)

interface Employee {
    firstName: string;
    lastName: string;
    age: number;
    phone: number;
    address?: string;
    isSalaried: boolean
}

function printEmployeeDetails(person: Employee) {
    console.log(`
    Name: ${person.firstName} ${person.lastName} 
    Age: ${person.age}
    #Phone: ${person.phone}
    Salary: ${person.isSalaried}`)
}

let deva: Employee = {
    firstName: "Deva",
    lastName: "Kumar",
    age: 21,
    phone: 9876543210,
    isSalaried: true,
};

printEmployeeDetails(deva);

// Class
class Student {
    public Name: string;

    constructor(name: string) {
        this.Name = name;
    }
    greet() {
        console.log(`Good Morning, ${this.Name}`);
    }
}

let s1 = new Student("Deva");
s1.greet();
console.log(s1.Name);

// Inheritance
class Teacher extends Student {

    constructor(name: string) {
        super(name);
    }
    assignTask() {
        console.log("Teacher assigns task to students")
    }
}

let t1 = new Teacher("Angela Yu");
t1.greet();
t1.assignTask();
console.log(t1.Name);

// Access Modifiers
// By default, all the attributes and methods are public
// We use access modifier as prefix to attributes and methods 
// public    -->  for free accessibility
// private   -->  not accessible outside the own class
// protected -->  only accessible inside base class and derived class
