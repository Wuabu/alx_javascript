// addMeMaybe.js

// Define and export the addMeMaybe function
module.exports.addMeMaybe = function addMeMaybe(number, callback) {
    const newValue = number + 1;
    callback(newValue);
  };
  