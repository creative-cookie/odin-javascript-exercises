const fibonacci = function(num) {
    if(num < 0) { return 'OOPS'};
    if(num === 0) { return 0};

    let arr = [];
    for(let i = 0; i <= num; i++){
        (i === 0 || i === 1) ? arr.push(1) : arr.push(arr[i-1] + arr[i-2])
    }

    return arr[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
