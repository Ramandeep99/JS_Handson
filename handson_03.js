/*
---------------            Functions

// Q1
function fun() {
    console.log(10);
}
fun()

// Q2
function two(a, b) {
    console.log(`Sum of ${a} ,${b} is ${a+b}`);
}
two(3, 4);


// Q3
const three = () => {
    console.log('Arrow function')
}
three()

Q4.
var x = 21;
var girl = function() {
    console.log(x)
    var x = 20;
}
girl();
Ans: undefined

// Q5
var x = 21
girl();
console.log(x)

function girl() {
    console.log(x)
    var x = 20;
}
Ans:
undefined
21


Q6.
// var x = 21;
// a();

// function a() {
//     console.log(x) // it will print 21 as x is not declared in local scope so it will check in global scope
//     x = 20;
// }



// var x = 31;
// girl();

// function girl() {
//     console.log(x)  // it will print undefined due to temporal deadzone for x
//     var x = 20;
// }


Q6.
var x = 21;
a();
b();

function a() {
    x = 20;
    console.log(x)
}

function b() {
    x = 40;
    console.log(x)
}
Ans: 20, 40


// Q7.

function factorial(n) {
    var ans = 1;
    for (var i = 2; i <= n; i++) {
        ans *= i;
    }
    return ans;
}

console.log(factorial(5))

*/