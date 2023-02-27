/*
// Q2
let count = 0;
(function() {
    if (count === 0) {
        let count = 1;
        console.log(count) // ??  == 1
    }
    console.log(count) // ?? == 0
})();

// Q3

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
        console.log(i)
    }, 2000)
}

it will print 3 three times after 2 secs because for each iteration, an
asynchronous function call will go into the task queue and return callback after 2 secs

// Q4
function outer(len) {
    return function inner(breadth) {
        return len * breadth;
    }
}

console.log(outer(3)(2)) // 6


// Q5
function outer() {
    let a = 0;

    function inner() {
        a++;
        console.log(a)
    }
    return inner;
}

const x = outer()
x()
x()




// Q6
var a = 12;
(function() {
    alert(a); // create an alert having value 12

})();



// Q7
var a = 10;
var x = (function() {  
    var a = 12;
    console.log(10)
    return function() {
        // console.log(20)
        alert(a)    
    }
})();  // at this point only  10 is printed
console.log(x)
    x();  // here 20 is printed and alert occurs
    
*/

var globalVar = 'xyz';
(function outer(outerArg) {
    var outerVar = 'a';
    (function inner(innerArg) {
        var innerVar = 'b';
        console.log(
            'outerArg = ' + outerArg + '\n' + 'innerArg = ' + innerArg + '\n' +
            'outerVar = ' + outerVar + '\n' + 'innerVar = ' + innerVar +
            '\n' + 'globalVar = ' + globalVar
        );
    })(456)
})(123) 