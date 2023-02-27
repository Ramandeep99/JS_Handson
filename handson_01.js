/*

--------------------            Array of objects

// Q1
let studentRecords = [{ name: 'John', id: 123, marks: 98 }, { name: 'Baba', id: 101, marks: 90 }, { name: 'yaga', id: 113, marks: 39 }, { name: 'Wick', id: 119, marks: 59 }]
studentRecords.forEach(student => {
    console.log(student.name.toUpperCase())
})

// Q2
let studentRecords = [{ name: 'John', id: 123, marks: 98 }, { name: 'Baba', id: 101, marks: 90 }, { name: 'yaga', id: 113, marks: 39 }, { name: 'Wick', id: 119, marks: 59 }]
studentRecords.forEach(student => {
    if (student.marks >= 50) {
        console.log(student)
    }
})


// Q3
let studentRecords = [{ name: 'John', id: 123, marks: 98 }, { name: 'Baba', id: 101, marks: 90 }, { name: 'yaga', id: 113, marks: 39 }, { name: 'Wick', id: 119, marks: 59 }]
studentRecords.forEach(student => {
    if (student.marks > 50 && student.id > 120) {
        console.log(student)
    }
})


// Q4
let studentRecords = [{ name: 'John', id: 123, marks: 98 }, { name: 'Baba', id: 101, marks: 90 }, { name: 'yaga', id: 113, marks: 39 }, { name: 'Wick', id: 119, marks: 59 }]
var sumOfMarks = 0;
studentRecords.forEach(student => {
    sumOfMarks += student.marks
})
console.log(sumOfMarks)


// Q5
let studentRecords = [{ name: 'John', id: 123, marks: 98 }, { name: 'Baba', id: 101, marks: 90 }, { name: 'yaga', id: 113, marks: 39 }, { name: 'Wick', id: 119, marks: 59 }]
studentRecords.forEach(student => {
    if (student.marks > 50) {
        console.log(student.name)
    }
})



// Q6
let studentRecords = [{ name: 'John', id: 123, marks: 98 }, { name: 'Baba', id: 101, marks: 90 }, { name: 'yaga', id: 113, marks: 39 }, { name: 'Wick', id: 119, marks: 59 }]
var sumOfMarks = 0;
studentRecords.forEach(student => {
    if (student.id > 120) {
        sumOfMarks += student.marks
    }
})
console.log(sumOfMarks)


// Q7
let studentRecords = [{ name: 'John', id: 123, marks: 98 }, { name: 'Baba', id: 101, marks: 23 }, { name: 'yaga', id: 113, marks: 45 }, { name: 'Wick', id: 119, marks: 75 }]
var sumOfMarks = 0;
studentRecords.forEach(student => {
    if (student.marks < 50 && student.marks + 15 > 50) {
        sumOfMarks += student.marks + 15
    }
})
console.log(sumOfMarks)


// Q8.
let reqArr = [{ name: 'user1', class: 12, rollNo: 1 }, { name: 'user2', class: 12, rollNo: 2 }, { name: 'user3', class: 12, rollNo: 3 }, { name: 'user4', class: 12, rollNo: 4 }, { name: 'user5', class: 12, rollNo: 5 }, { name: 'user6', class: 12, rollNo: 6 }]

*/