// Question No 01
let marks = {
    amit: 90,
    harry: 89,
    subham: 78,
    Monika: 4
}
for(let i=0;i<Object.keys(marks).length;i++){
    console.log("The marks of "+ Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]])
}

// Question No 01
for(let key in marks){
    console.log("The marks of "+ key +" are "+marks[key])
}

// Questions No 02
let ch = 4
let i = 10
// while(i!=ch){
//     // i = prompt("Enter a Number")
// }

// Question No 02
const mean = (a,b,c,d)=>{
    return (a+b+c+d)/4
}

console.log(mean(4,5,6,7))