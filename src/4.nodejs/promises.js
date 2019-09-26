Promise.resolve(5)
  .then(function(value) {
    console.log('The value is: ' + value);
    return value + 5;
  })
  .then(function(newValue) {
    console.log('The newValue is: ' + newValue);
    return newValue * 3;
  })
  .then(function(thirdValue) {
    console.log('The thirdValue is: ' + thirdValue);
  });

console.log('When do you think this line will run?');