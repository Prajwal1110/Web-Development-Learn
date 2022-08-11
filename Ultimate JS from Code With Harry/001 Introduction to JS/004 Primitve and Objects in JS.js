/*

PRIMITIVE DATATYPE in JS
[NNBBSSU]

N-Null
N-Number
S-Symbol
S-string
B- Bollean
B-Big Int
U-Undefined

*/

//NULL
let a = null
//Number
let b = 345
//Boolean
let c = true;
let d  = BigInt("567")+BigInt("3")
//String
let e = "Amit"
let f = Symbol("I am a boy")
//Undefined means not assign upto now
let g = undefined   // let g OR let g = undefined
//Print the value
console.log(a , b , c, d , e, f, g)
//Find the type
console.log(typeof d)



// OBJECTS  Key-Value Pairs [Not-Primitive DataType]

//Object
const item = {
    "Amit": true,
    "Shivam": false,
    "Yash": 67,
    "Vishal": undefined
}

//will print true
console.log(item["Amit"])
//Will print Undefined
console.log(item["Crush"])