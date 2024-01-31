// executeXTimes.js

// Define and export the executeXTimes function
module.exports.executeXTimes = function executeXTimes(x, theFunction) {
    for (let i = 0; i < x; i++) {
      theFunction();
    }
  };
  