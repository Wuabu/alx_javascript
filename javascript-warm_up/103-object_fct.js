// main.js

// Import the addMeMaybe function from addMeMaybe.js
const { addMeMaybe } = require('./addMeMaybe');

// Define the incr function that increments the integer value
const incr = (number) => {
  return number + 1;
};

// Call addMeMaybe with number = 5, using incr as a callback
addMeMaybe(5, function (newValue) {
  const incrementedValue = incr(newValue);
  console.log(`New value: ${incrementedValue}`);
});
