
const { addMeMaybe } = require('./addMeMaybe');


const incr = (number) => {
  return number + 1;
};

const myObject = {
  type: 'object',
  value: 12,
};


addMeMaybe(myObject.value, function (newValue) {
  myObject.value = newValue;
  myObject.incr = incr; 
  console.log(myObject);
});


for (let i = 0; i < 3; i++) {
  addMeMaybe(myObject.value, function (newValue) {
    myObject.value = newValue;
    myObject.incr = incr;
    console.log(myObject);
  });
}
