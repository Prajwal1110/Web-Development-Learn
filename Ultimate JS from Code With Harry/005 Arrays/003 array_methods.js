let num = [1,22,39,41,5,62,7]
let numMore = [1,2,3,4,5,6,7,8,9,10,11,12,13]
console.log(num)

delete num[0]
console.log(num)

let newArray = num.concat(numMore)
console.log(newArray)

let compare = (a,b)=>{
    return b-a
}

num.sort()
console.log(num)
num.sort(compare)
console.log(num)
num.reverse()
console.log(num)

// Splice and Slice
const newA = [1,2,3,4,5,6,7,8,9]
newA.splice(2,3,12,13,14,15,16,17)
console.log(newA)

console.log(newA.slice(3))
console.log(newA)
