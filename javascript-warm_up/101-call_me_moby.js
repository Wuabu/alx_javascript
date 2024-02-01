
module.exports.callMeMoby = function(x, function1) {
  let count = x;  
  while (count > 0) {
    function1();
    count--;
  }
}
  