const repeatString = function(string, num) {
    let newString = '';
    if(num < 0){
        newString = 'ERROR';
        return newString;
    }

    while(num){
        newString += string;
        num--;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
