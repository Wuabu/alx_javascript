//add();
//function add (num, num1){
//    return num + num1;
//} console.log(add(num,num1));

// 13-add.js

// Define and export the add function
module.exports.add = function add(num1, num2) {
    return num1 + num2;
};


// 13-main.js

// Import the add function from 13-add.js
const add = require('./13-add').add;

// Call the add function with arguments 3 and 5 and print the result
console.log(add( "", ""));
