var algosort = require("./index.js");

var sortedNumbers = algosort.algosort({
    algorithm: 'selectionsort',
    numbers: [1, 3, 2, 7, 3, 9, 5, 6],
    output: 'afterEachNumber'
  });

console.log(sortedNumbers);
