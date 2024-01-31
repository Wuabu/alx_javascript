// 103-object_fct.js

// Import the addMeMaybe function from addMeMaybe.js
const { addMeMaybe } = require('./addMeMaybe');

// Define the incr function that increments the integer value
const incr = (number) => {
  return number + 1;
};

const myObject = {
  type: 'object',
  value: 12,
};

// Call addMeMaybe with the myObject value, using incr as a callback
addMeMaybe(myObject.value, function (newValue) {
  myObject.value = newValue;
  myObject.incr = incr; // Add the incr function to myObject
  console.log(myObject);
});

// Additional calls to addMeMaybe to demonstrate the incrementing behavior
for (let i = 0; i < 3; i++) {
  addMeMaybe(myObject.value, function (newValue) {
    myObject.value = newValue;
    myObject.incr = incr;
    console.log(myObject);
  });
}
