const palindromes = function (str) {
    let forward = [...str].map(letter => letter.toLowerCase()).filter(letter => letter.match(/[a-z]/));
    let backward = [...forward].reverse();

    return (forward.toString() === backward.toString()) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
