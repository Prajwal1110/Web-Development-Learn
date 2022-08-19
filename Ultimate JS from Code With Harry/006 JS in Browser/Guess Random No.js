let generatedNo = Math.floor(Math.random() * 100)
let chances = 0
let num
do{
    let a = prompt("Enter Number: ")
    num = parseInt(a)
    if(num==generatedNo) break
    if(num>generatedNo){
        alert("Number is Greater")
    }else{
        alert("Number is Lesser")
    }
    chances++
}while(num!=generatedNo)
alert(chances)
alert(num)