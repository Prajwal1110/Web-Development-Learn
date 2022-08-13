// Map 

let arr = [45,23,21,2,12,5,6,0]

//Map for Creating new array 
// But for each same array
arr.map((value, index)=>{
    console.log(value, index)
})
console.log(arr)


//Filter
let arr2 = arr.filter((a)=>{
    return a<10
})
console.log(arr2)

// Reduce Method

let arr3 = [1,2,3,4,5,2,1]
let newarr3 = arr3.reduce((h1,h2)=>{
    return h1+h2
})

console.log(newarr3)

// Reduce return a value
