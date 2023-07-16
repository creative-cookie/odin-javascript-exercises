const findTheOldest = function(people) {
    return people.reduce((acc, person, index) =>{
        let currentPersonAge;
        let prevPersonAge;

        if(index === 0){
            return acc = {...person};
        }

        if("yearOfDeath" in person){
            currentPersonAge = person.yearOfDeath - person.yearOfBirth;
        } else {
            currentPersonAge = (new Date().getFullYear()) - person.yearOfBirth;
        }

        if("yearOfDeath" in acc){
            prevPersonAge = acc.yearOfDeath - acc.yearOfBirth;
        } else {
            prevPersonAge = (new Date().getFullYear()) - acc.yearOfBirth;
        }
        
        if(currentPersonAge > prevPersonAge){
            return acc = {...person};
        }else {
            return acc;
        }
    }, {})
};

// Do not edit below this line
module.exports = findTheOldest;
