// Array Practice set 01

// Question No: 1
var arr = [1,2,3,4,5,6,7]
var newNo = 8
console.log(arr)
arr.push(newNo)
console.log(arr)

//Question No: 2
var zeroNo = 0
if(zeroNo!=0){
    arr.push(0)
}
console.log(arr)

//Question No: 3
let newArr = [1,2,10,4,56,78,90,13,30]
let n = newArr.filter((x)=>{
   return x%10 == 0
})
console.log(n)

//Question No: 4
let nu = newArr.map((x)=>{
    return x*x
 })
 console.log(nu)

 //Question No: 5
 let nArr = [1,2,3,4,5,6,7,8]
 let nw = nArr.reduce((x1,x2)=>{
     return x1+x2
 })
 console.log(nw)
