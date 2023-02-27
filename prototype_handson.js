/*
// Q1
const parent = {
    name: "raman",
    fun: function() {
        console.log('deep')
    }
}

const child = {
    name: 'child'
}

child.__proto__ = parent;

child.fun()

// Q2

const arr = [1, 2];
console.log(arr.__proto__)
console.log(arr.__proto__.__proto__)
console.log(arr.__proto__.__proto__.__proto__)


// Q3

Array.prototype.calculateSum = function() {
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return sum;
}

arr1 = [1, 2, 3, 4]
arr2 = [2, 3, 4]
console.log(arr1.calculateSum())
console.log(arr2.calculateSum())

// Q4

const obj1 = {
    fname: 'Raman',
    lname: 'deep',
    fullName: function() {
        console.log(this.fname + ' ' + this.lname)
    }
}
const obj2 = {
    city: "sirsa",
    state: 'haryana',
    contact: 8930176068,
    fullAdd: function() {
        console.log(this.city + ' ' + this.state)
    }
}

obj2.__proto__ = obj1
obj2.fullName()
obj2.fullAdd()

*/