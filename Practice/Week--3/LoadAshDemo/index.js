var lodash = require('lodash');

const nums=[1,2,2,3,3,4,5,5,6,7,8,11];

let result = lodash.uniq(nums);
console.log(result);

const data=lodash.concat(nums,[7,8]);
console.log(data);

lodash.fill(nums,10);
console.log(nums);

lodash.fill(nums,'*',1,3);
console.log(nums);

var countries = [
    {"key":"DE","name":"Deutschland"},
    {"key":"SA","name":"South Africa"},
    {"key":"PK","name":"Pakistan"},
    {"key":"us","name":"America"},
]

var filterData = lodash.filter(countries,(country)=>country.key=='PK');

console.log(filterData);