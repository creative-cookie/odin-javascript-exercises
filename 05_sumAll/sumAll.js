const sumAll = function(num1, num2) {
    let sum = 0;
    let low;
    let high;

    if(!Number.isInteger(num1) || !Number.isInteger(num2)) return 'ERROR';
    if(num1 < 0 || num2 < 0) return 'ERROR';
    if(num1 === num2) return 'ERROR';
    
    if(num1 < num2){
        low = num1;
        high = num2;
    }else{
        low = num2;
        high = num1;
    }

    for(let i = low; i <= high; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
