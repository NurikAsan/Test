function fibonachhi(n){
    if(n<=2){
        return 1
    }
    return fibonachhi(n - 1) + fibonachhi(n-2)
}

function factorial(n){
    if(n<=1){
        return 1
    }
    return n * factorial(n-1)
}

let sum = function(num){
    num += ""
    let revers = "";
    for(let i=num.length - 1;i >= 0;i--){
        revers += num[i];
    }
    return +revers
}

function rundomNumber(){
    let number = Math.floor(Math.random()*10)
    for(let i = 0; i < 10; i++){
        let result = prompt('Enter the number')
        if(number==result){
            return true
        }
    }

    return false
}


console.log(rundomNumber())