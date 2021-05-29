# AlgoSort

This node package is for all javascript developers who are interested in sorting algorithms. This package gives you the possibility to choose between many different sorting algorithms. This package will output a two dimensional array of all numbers in different sorting states. <br><br>

## Installation
`npm i algosort` <br><br>

## Code
```javascript
var algosort = require("algosort");

var sortedNumbers = algosort.algosort({
    algorithm: 'bubblesort',
    numbers: [1, 3, 2, 7, 3, 9, 5, 6],
    output: 'afterEachNumber'
  });

console.log(sortedNumbers);
```
<br>

## Options

AlgoSort supports 2 algorithm (at the moment), 3 different options for the output and any length of the array, which is going to be sorted:

* *algorithm* - _bubblesort | selectionsort_ (More options are coming soon!)
* *output* - _afterEachNumber | afterEachRun | afterAllRuns_ (Default: _afterEachNumber_!)
* *numbers* - _array[int, int, int]_
