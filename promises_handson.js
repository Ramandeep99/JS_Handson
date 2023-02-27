/*
//Q1. callback function

function fun1(ans) {
    console.log('Answer is: ', ans)
}


function calculator(a, b, callback) {
    callback(a + b);
}

calculator(2, 5, fun1);



// Q2

var i = 0;
const fun = () => {
    i++;
    if (i == 8) return;
    setTimeout(() => {
        console.log(i);
        fun();
    }, i * 1000)
}

fun();




// Q3. 
const prom = new Promise(function(resolve, reject) {
        resolve()
    }).then(() => {
        setTimeout(() => {
            console.log(1)
        }, 1000);
    }).then(() => setTimeout(() => {
        console.log(2)
    }, 2000))
    .then(() => setTimeout(() => {
        console.log(3)
    }, 3000))
    .then(() => setTimeout(() => {
        console.log(4)
    }, 4000))
    .then(() => setTimeout(() => {
        console.log(5)
    }, 5000))
    .then(() => setTimeout(() => {
        console.log(6)
    }, 6000))
    .then(() => setTimeout(() => {
        console.log(7)
    }, 7000))



// Q4
function fun(data) {
    return new Promise(function(resolve, reject) {
        if (data == 'YES') {
            resolve('Promise Resolved')
        } else {
            reject('Promise Rejected')
        }
    })
}

fun('YES')
    .then((data) => console.log(data))
    .catch((error) => console.log(error))

fun()
    .then((data) => console.log(data))
    .catch((error) => console.log(error))



// Q5 - Callback function

function display(data) {
    console.log(data)
}

function calculate(a, b, callback) {
    return callback(a + b);
}

calculate(4, 5, display);


// Q6 Callback Hell

setTimeout(() => {
    console.log(1)
    setTimeout(() => {
        console.log(2)
        setTimeout(() => {
            console.log(3)
            setTimeout(() => {
                console.log(4)
            }, 4000);
        }, 3000);
    }, 2000);
}, 1000);



// Q7 Promise function

const p = new Promise(function(resolve, reject) {
    resolve('Success')
    reject('Failure')
})

p.then((data) => console.log(data))
    .catch((error) => console.log(error))



const firstFun = async function(data) {
    const res = await data;
    console.log("async result: ", res)
}

firstFun(10);
console.log(20);

*/