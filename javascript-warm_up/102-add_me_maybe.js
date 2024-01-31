// incrementAndCall.js

// Define and export the incrementAndCall function
module.exports.incrementAndCall = function incrementAndCall(number, theFunction) {
    const incrementedNumber = number + 1;
    theFunction(incrementedNumber);
  };
  