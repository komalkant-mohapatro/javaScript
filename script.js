// var , let , const


var a = 12;
var a;
let a = 13;
let a;
const a = 14; // use where you doesn't want to change the value of the variable int the entire code. Or you want to fix  the value of the variable.
//const a;  // it can cause errors.


// Declaration and Initialization:-
//...................................................
var a; // declaration
a = 12; // initialization { giving the first value to the variable }


//window mein add hota hai var se declare kiya hua variable
//function scoped hota hai
//aap var se declare kiya hua variable ko reassign kar sakte ho and error nahi ayega.

// Example:-
var a = 12;
var a = 13;

//...............................................................


let a = 12;
let a = 13; // error aayega because let se declare kiya hua variable ko reassign nahi kar sakte ho.


let b; // declaration
b = 13; // initialization
const c = 14; // declaration and initialization at the same time

// Scope:(Global Scope, Function Scope, Block Scope):-

// Global Scope:-
var a = 12; // which is not inside any bracket or function is called global scope. It can be accessed anywhere in the code.

// Function Scope:-
function myFunction() {
    var a = 12; // which is inside the function is called function scope. It can be accessed only inside the function.
}

// Block Scope:-

let a; // Let is a block scope variable, which means it can only be accessed within the block it is defined in. It cannot be accessed outside of that block.
// let only can be used in their parent braces.
function myFunction() {
    let b = 13; // this let is for first block {} which is in yello color. It can be accessed only inside this block.
    if (true) {
        let a = 12; // this let is for second block {} which is in blue color. It can be accessed only inside this block.
    }
}



// Redeclaration and Reassignment:-

var a = 12; // redeclaration and reassignment is possible with var
var a = 13; // redeclaration and reassignment is possible with var

let a = 12; // redeclaration is not possible with let
let a = 13; // redeclaration is not possible with let


//Temoral Dead Zone:-

//Utna area jitne mein js ko pata to hai ki variable exist karta hai par wo aapko value nahi de sakta hai.
console.log(e); // it will give you an error because a is in temporal dead zone.


let e =  12;
let d =  34;

// but in  var it is possibe.
// Example:-

console.log(f);

var f = 12;

// It will give the output as undefined . but doesnt show any error which was there in the case of let.

// REASON:-

// HOISTING AND IMPACT PER TYPE:
// Hoisting means :- Ek variable ko jab js mein banaate hai to wo variable do hisso mein toot jaata hai and uska declare part upar chala jaata hai and uska intillizatio part neeche reh jata hai.

