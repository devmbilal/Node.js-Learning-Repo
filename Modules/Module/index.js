const util =require('./utils');

var myStringArray=['Bilal','Ahsan','Sheraz','Rehan','Usman'];

function getCapital(myStringArray){
    return util.getUpperCase(myStringArray);
}

console.log(getCapital(myStringArray));

function getLower(myStringArray){
    return util.getLowerCase(myStringArray);
}

console.log(getLower(myStringArray));

function getPosition(myStringArray,element){
    return util.getIndexPosition(myStringArray,element);
}

console.log(getPosition(myStringArray,'Usman'));