const bubblesortAlgorithm = require('./algorithms/functional/bubblesort.js');
const selectionsortAlgorithm = require('./algorithms/functional/selectionsort.js');

function algosort(options) {
  if (options.numbers != null)
    if (options.algorithm === "bubblesort")
      return bubblesortAlgorithm.bubblesort(options.numbers, 0, options.output, 0);
    else if (options.algorithm === "selectionsort")
      return selectionsortAlgorithm.selectionsort(options.numbers, 0, options.output, 0);
    else
      return `There is no algorithm called ${options.algorithm}!`;
  else
    return `You need to enter an array of numbers!`;
}

module.exports.algosort = algosort;
