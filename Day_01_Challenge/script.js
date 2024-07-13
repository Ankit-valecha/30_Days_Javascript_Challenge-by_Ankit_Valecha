// Activity 1: Variable Declaration
var a = 30;
console.log(`a:-${a}`);

let b = "Ankit Valecha";
console.log(`b:- ${b}`);

// Activity 2: Constant Declaration
const c = true;
console.log(`c:- ${c}`);

// Activity 3: Data Types

// 1:-Number:-
var d = 40;
console.log(`d:-${d} type of variable a is ${typeof(d)}`);

// 2:-String:-
var e = "Ankit Valecha";
console.log(`e:-${e} and the type of variable e is ${typeof(e)}`);

// 3:-Boolean:-
var f = false;
console.log(`f:- ${f} and the type of f is ${typeof(f)}`);

// 4:-Object:-
var g = {
    name : "Ankit Valecha",
    age : 24,
    isStudent : true
}
console.log( g ,`g:- and type of variable g is ${typeof(g)}`);

// Array:- Arrays are hetrogenous in JS.
const h = [1,2,3,"Ankit", true,"valecha"];
console.log(h, `h:- and its type is ${typeof(h)}`);


// Activity 4: Reassigning Variables:-

let I = 50;
console.log(`Initial value of I:- ${I}`);
I = "Ankit Valecha";
console.log(`Final value of I:- ${I}`);

// Activity 5: Understanding `const`:-
const J = 50;
console.log(`Initial Value of Const J is:- ${J}`);
// J = 60;
// console.log('Final Value of Const J is:- ${J}')

// Hence we understood that when we reassign a value  to a const variable then we get an error stating:-"That we cannot re-assign values to a const variable".
// And also while declaring CONST variable we also have to assign a value then only, not afterwards!


// Feature Request 1:-
let nameOf = "Ankit Avinash Valecha";
console.log(`name is:- ${nameOf} and its type is ${typeof(nameOf)}`);

let age = 25;
console.log(`age is:- ${age} and its type is ${typeof(age)}`);

let isStudent = true;
console.log(`isStudent:- ${isStudent} and its type is ${typeof(isStudent)}`);

let array = [1,2,3,4,5];
console.log(`array is:- ${array} and its type is ${typeof(array)}`);

let object = {
    isQualified : true,
    highestStudy : "B.tech",
    Cgpa : 7.6
};
console.log(`Object is ${object} and its type is ${typeof(object)}`);
// individually printing Object requires:-
console.log(object);

// Feature Request 2:-
// Re-assigning a let
let x = 30;
console.log(`Initial value of x is ${x} and initially type of variable x is ${typeof(x)}`);
// lets try to reassign and see what happens:-
x = "ANKIT VALECHA";
console.log(`Final value of x is ${x} and Finally type of variable x is ${typeof(x)}`);
// henceforth we can see that while reassigning value it dosent make a diffrence mostly works like var only, the difference is in its scope, Let has a block scope.

// Re-assigning a const:-
const y = 30;
console.log(`Initial value of y is ${y} and initially type of variable y is ${typeof(y)}`);
// lets try to reassign and see what happens:-
try{
    y = "ANKIT VALECHA";
}catch(error){
    console.log(`error when we reassign constant variable y is:- ${error.message}`);
}

// Hence we understood that when we reassign a value  to a const variable then we get an error stating:-"That we cannot re-assign values to a const variable".
// And also while declaring CONST variable we also have to assign a value then only, not afterwards! i.e declaration and assignment should happen simultaneously only not afterwards.
// const also has a block scope.

