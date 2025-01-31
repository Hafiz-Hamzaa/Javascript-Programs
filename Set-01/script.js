// Variables & Datatypes Programs

// 1️⃣ Simple Message Storing and Displaying
// ✅ Ek variable me naam store karo aur usko print karo
let name = "Hamza"
console.log("Hello" + " " + name);

// ✅ Do variables me values store karo aur unko ek sath print karo
let firstName = "Hafiz"
let lastName = "Hamza"
console.log("Full Name :", firstName + " "+ lastName);

// 2️⃣ Data Types ko Samajhne ke liye Programs
// ✅ String aur Number ka difference samajhne ke liye
let a = "23"
let b = 23
console.log(a , b);
console.log(typeof a , typeof b);

// ✅ User se input lekar variables me store karo aur print karo
// let user = prompt("What is your age")
// console.log(`I am ${user} years old`);

// ✅ Ek object banao jo student ki details store kare
const student = {
    userName : "Sameer",
    age : 21,
    isMarried : false,
    rollNo : 245,
    isPassed  :true
}
console.log(student);

// 3️⃣ Mathematical Calculations ke Programs
// ✅ Do numbers ko add karo aur result print karo

let num1 = 5;
let num2 = 10;
let sum = num1 + num2;
console.log("Sum: " + sum);

// ✅ User se do numbers lo aur unko multiply karo
// let numone = prompt("Enter a first number")
// let numtwo = prompt ("Enter a second number")
// let result = numone * numtwo
// console.log("Multiplication Result : ", result);

// ✅ const ka use dekhne ke liye PI ka example
const PI = Math.PI
let radius = 5
let ouput = PI * radius * radius
console.log("Area of Circle :", ouput)

// 4️⃣ Bonus: Template Literals ka Use
// ✅ Variables ko string ke andar use karne ka best tarika

let userName = "Usman"
let age = 28
console.log(`I am ${userName} and I am ${age} years old.`)

// Create a Variable of type string and add with number and check it type also
let str = "hello"
let number = 123
let Result = str + number;
console.log(Result);
console.log(typeof Result);

// create a const object in javascript can you change it a hold number later and try to add a new key in a object?
const obj = {
    age : 23
}
console.log(obj);
obj.age = 12
obj.name = "ali"
console.log(obj);

// write a js program of word-meaning dictionary of 5 word
const dicticonary = {
    Apple: "Fruit",
    Book: "Novel",
    Computer: "Machine",
    Ocean: "Sea",
    Mountain: "Peak",
}
console.log(dicticonary);