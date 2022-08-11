// Functions 

function fact(a){
    let ans = 1
    while(a!=1){
      ans*=a;
      a--;
    }
    console.log("Done")
    return ans
}


function averageTwo(a,b){
    return (a+b)/2
}

const sum=(p,q)=>{
    return p+q 
}

console.log(fact(5))
console.log(averageTwo(5,6))
console.log(sum(6,9))