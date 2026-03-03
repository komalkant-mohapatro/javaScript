

// 1. Data Types................................................

// Data types can be defined as the type of value that a variable can hold. In JavaScript, it is categorized into two main types:

//A. Primitive Data Types:
//B. Reference Data Types:

//A.. Primitive Data Types: asise saari values jinko copy karne par tumhe ek real copy mil jayega.
// e.g. String, Number, Boolean, Null, Undefined, Symbol, BigInt


//B. Reference Data Types: jinko copy karne par real copy nahi milega but apko reference milega parent ka.
// e.g. Object {}, Array[], Function()


// Example of Primitive Data Types
let a =10;
let b = a; 
a = a+20;
console.log(a); // the ouput will be  30 cause the a is updated.
console.log(b); // the output will be 10 cause the b the value recieves the value of a and b is not updated.

// Example of Reference Data Types
let g = [1,2,3];
let d = g;
console.log(d)// agar g ke value mein change karenge to d ke  value mein bhi hoga and vice versa.
g.push(4);
console.log(d);// the output will be [1,2,3,4] cause the d is reference to g. so when we update g then d will also update.
d.push(5);
console.log(g);// the output will be [1,2,3,4,5] cause the g is reference to d. so when we update d then g will also update.


//A....................................................................Primitive data types types:..........................

//a. Strings :-
// can be denoted and used as :-
// ""(double quotes) , ''(single quotes)  , ``(backticks)

//b. Numbers :-
// can be denoted and used as :-
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5, 9.5, -1.5, -2.5, -3.5, -4.5, -5.5, -6.5, -7.5, -8.5, -9.5

//c. Boolean :-
// can be denoted and used as :-
// true, false 

//d. Null :-
// can be denoted and used as :-
// null                          //null ka matlab hai apne jaan bhojh ke koi value nahi di.

//e. Undefined :-
// can be denoted and used as :-
// undefined                     //undefined ka matlab hai apne variable ko declare to kar diya but usko koi value assign nahi kiya. isliye uska value undefined hota hai. 

//f. Symbol :-
// can be denoted and used as :-
// Symbol('description')   // Synbol is a unique and immutable primitive value that can be used as the key of an object property. It is created using the Symbol() function, which takes an optional description as an argument. Each time you call Symbol(), it returns a new unique symbol, even if you provide the same description.
// Example of Symbol:
let obj = {
    uid : 1 ,
    name: "John",
    age : 12,
    email : "test@test.com"
    
}

let u1 = Symbol('uid');
obj[u1]="001";
console.log(obj); // the output will be {uid: 1, name: "John", age: 12, email: "

//g. BigInt :-
// can be denoted and used as :-
// 9007199254740991n, -9007199254740991n, 1234567890123456789012345678901234567890n, -1234567890123456789012345678901234567890n   // BigInt is a built-in object in JavaScript that provides a way to represent whole numbers larger than 2^53 - 1, which is the largest number that can be safely represented with the Number type. BigInt values are created by appending 'n' to the end of an integer literal or by using the BigInt() constructor.
// A normal var can store a maximum value of 9007199254740991, but with BigInt we can store much larger numbers.
let bigInt1 = 9007199254740991n;
let bigInt2 = 1234567890123456789012345678901234567890n;
star= bigInt1+10n;
console.log(star); // the output will be 9007199254741001n cause the bigInt1 is 9007199254740991n and we are adding 10n to it. so the result will be 9007199254741001n.

//B.............................................................Reference data types types:..............................................................................................................


//2. Reference Data Types:
// Example of Object
let person = {
    name: "John", 
    age: 30,
    city: "New York"
}       
person.name = "Doe"; // the output will be {name: "Doe", age: 30, city: "New York"} cause we are updating the name property of the person object.





//C...............................................................Dynamic Typing:..............................................................................................................



//2.Dynamic Typing: JavaScript is a dynamically typed language, which means that you don't have to specify the data type of a variable when you declare it. The data type of a variable can change at runtime based on the value assigned to it.
let x = 10; // x is a number
console.log(typeof x); // the output will be "number"

x = "Hello";    // x is now a string
console.log(typeof x); // the output will be "string"           


let j = 12;
 j = "Hello";
 j = true;
  j = null;
 j = undefined;
 j ={};
 j=  [];
 console.log(typeof j); // the output will be "object" cause the last value of j is an empty object. so the type of j is object.
  

 //D.........Types of quirks in JavaScript:.............................................................................................................

 //1. Type Coercion: JavaScript automatically converts values from one data type to another when performing operations. This can lead to unexpected results if you're not careful.
 let result = '5' + 10; // the output will be "510" cause the + operator is used for string concatenation when one of the operands is a string. so the number 10 is coerced to a string and concatenated with '5' to produce "510".
 console.log(result);

 // + operator can used in both addition of number and if one is number annd one is string then it concatenate the string and number. but if both are number then it will add the numbers.
 //- operator can onnly used for subtraction of numbers, if we try to " 5" - 1 then the output will be 4 cause the - operator is used for subtraction of numbers. so the string '5' is coerced to a number and subtracted by 1 to produce 4.

 //2. NaN (Not a Number): NaN is a special value in JavaScript that represents an invalid number. It can be the result of an operation that cannot produce a valid number, such as dividing zero by zero or trying to parse a non-numeric string as a number.
let invalidNumber = 0 / 0; // the output will be NaN cause dividing zero by zero is an invalid operation that cannot produce a valid number.


//E...........................Truthy and Falsy Values:.............................................................................................................

// 0 false "" null underfined NaN document.all are falsy values in JavaScript. all other values are truthy values in JavaScript.
if(0){

}
// the output will be nothing cause 0 is a falsy value in JavaScript. so the if condition will not be executed.
if(-1){

}
// the output will be nothing cause -1 is a truthy value in JavaScript. so the if condition will be executed.