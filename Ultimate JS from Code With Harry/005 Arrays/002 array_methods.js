//Array Methods

let num = [1,2,3,4,5]
console.log(num ,typeof num)
console.log(num.length)
let b = num.toString()
console.log(b ,typeof b)

let c = num.join("_")
console.log(c ,typeof c)

//remove ele from end of the array
let r = num.pop()
console.log(r)
console.log(num)

//add end of the array
num.push(69)
console.log(num)

//remove ele from start of the array
let ru = num.shift()
console.log(ru)
console.log(num)

//add start of the array
num.unshift(79)
console.log(num)