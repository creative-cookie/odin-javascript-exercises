const sumAll = function(num1, num2) {
    let sum = 0;
    let low;
    let high;

    if(Number.isInteger(num1) && Number.isInteger(num2)){
        if(Math.sign(num1) === 1 && Math.sign(num2) === 1){
            if(num1 !== num2){
                if(num1 < num2){
                    low = num1;
                    high = num2;
                }else{
                    low = num2;
                    high = num1;
                }
            }
        }else{
            return 'ERROR';
        }
    }else{
        return 'ERROR';
    }

    for(; low <= high; low++){
        sum += low;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
