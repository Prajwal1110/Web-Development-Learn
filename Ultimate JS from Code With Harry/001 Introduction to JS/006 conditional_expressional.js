// Conditional Expression in JS

// let a = prompt("Hey whats your age?")

// Number , String , undefined 
a=45
a = Number.parseInt(a)
console.log(a);
if(a>0){
    console.log("a greater than 0")
}else{
    console.log("a less than 0")
}


// Nested if-else
if(a>0){
    if(a>10){
        console.log("a greater than 0 and a greater than 10")
    }else{
        console.log("a greater than 0 and a not greater than 10")
    }
}

if(a>50){
    console.log("a greater than 50")
}else if(a>0){
    console.log("a greater than 0")
}


// Switch Statement

let point = "add"
let au=10
let bu=15
switch(point){
    case "add":
        console.log(au+bu)
        break

}

