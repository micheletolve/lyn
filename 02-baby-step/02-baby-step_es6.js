/*
  function oldFunction(input) {
    return input +1;
  }

##### Arrow function Javascript es6

  (input) => input+1

*/

const total = process.argv
  .map(val => +val)
  .filter(val = Number.isInteger(total))
  .reduce((sum, val) => sum + val);

console.log(total);
