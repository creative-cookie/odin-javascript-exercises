const removeFromArray = function(nums, ...args) {
    return nums.filter((num) =>{
        for(const arg of args){
            if(arg === num){
                return false;
            } 
        }
        return true;
    });
};

//console.log(removeFromArray([1, 2, 3, 4], 3, 2))
// Do not edit below this line
module.exports = removeFromArray;
