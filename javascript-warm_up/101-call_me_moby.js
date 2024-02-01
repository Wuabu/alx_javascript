
module.exports.executeXTimes = function executeXTimes(x, theFunction) {
  let count = x;  
  while (count > 0) {
    theFunction();
    count--;
  }
}
  