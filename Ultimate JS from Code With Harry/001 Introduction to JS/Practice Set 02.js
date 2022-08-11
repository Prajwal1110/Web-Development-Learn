// Chapter 02

//Question 01
let age =10
if(age>=10 && age<=20){
    console.log("Yes , age lies between 10 & 20")
}else{
    console.log("No , age lies between 10 & 20")
}

//Question 02
let sign = '*'
let a = 10
let b = 20
switch(sign){
    case '+':
        console.log("a+b = ",a+b)
        break
    case '-':
        console.log("a-b = ",a-b)
        break
    case '*':
        console.log("a*b = ",a*b)
        break
}

//Question 03
let number = 5
if(number%2==0 && number%3==0){
    console.log("Number divisible by 2&3.")
}else{
    console.log("Number not divisible by 2&3.")
}

//Question 04
let numberr = 15
if(numberr%2==0 || numberr%3==0){
    console.log("Number divisible by 2 or 3.")
}else{
    console.log("Number not divisible by 2 or 3.")
}

//Question 05
let agee = 19
agee>18?console.log("You can drive"):console.log("You can not drive")