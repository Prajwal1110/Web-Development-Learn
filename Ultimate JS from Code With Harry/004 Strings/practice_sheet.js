//Question No 01
let str = "Ami\""
console.log(str.length)

//Question No 02
const senetence = "Amit maity is a good boy"
console.log(senetence.includes("maity"))

//Question No 03
console.log(senetence.startsWith("Amit"))

//Question No 04
console.log(senetence.toLocaleLowerCase())

//Question No 05
let str2 = "Please give Rs 1000"
let amount = str2.slice("Please give Rs ".length)
amount = Number.parseInt(amount)
console.log(amount)
console.log(typeof amount)

//Question No 06
let freind = "Amit"
freind[3]="R"
console.log(freind)
//String is Immutable (freind not changed)