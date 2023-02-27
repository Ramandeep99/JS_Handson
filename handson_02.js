/*
------------             Map and Sets

// Q1 :- let str="abcadeecfb"
// let s="";
// const st=new Set();
// for(let i in str){
//     if(st.has(str[i])){
//         continue;
//     }
//     else{
//         s+=str[i];
//         st.add(str[i]);
//     }
// }
// console.log(s)

// Q2.
var str = 'abcadeecfb'

var mp = new Map();
for (var i of str) {
    if (mp.has(i)) {
        var temp = mp.get(i);
        mp.delete(i);
        mp.set(i, temp + 1);
    } else {
        mp.set(i, 1)
    }
}


for (var x of mp.entries()) {
    console.log(x)
}

*/