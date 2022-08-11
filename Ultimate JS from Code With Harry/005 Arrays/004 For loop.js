let num = [3,54,1,2,4]
//Clasical For Loop
for(let i=0;i<num.length;i++){
    console.log(num[i])
}

// for each loop
num.forEach((element) => {
    console.log(element*element)
})

//Array From
let name = "Amit"
let arr = Array.from(name)
console.log(arr)

//For of
for(let i of num){
    console.log(i)
}

//For in (key return)
for(let i in num){
    console.log(i)
}