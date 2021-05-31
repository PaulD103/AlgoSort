var sortedNumbers = [];
var arrayOfArrays = [];

exports.bubblesort = function(numbers, i, output, testIndicator) {
  if (output === "afterEachNumber")
    sortedNumbers = sortedNumbers.concat(numbers);
  else if (output === "afterEachRun") {
    if (i == 0)
      sortedNumbers = sortedNumbers.concat(numbers);
  } else if (output === "afterAllRuns")
    if (testIndicator == numbers.length-1)
      sortedNumbers = sortedNumbers.concat(numbers);

  if (numbers[i] > numbers[i+1]) {
    var smallerNumber = numbers[i+1];
    numbers[i+1] = numbers[i];
    numbers[i] = smallerNumber;

    testIndicator = 0;
  } else {
    testIndicator++;
  }
  if (testIndicator < numbers.length) {
    if (i < numbers.length-2) {
      i++;
      this.bubblesort(numbers, i, output, testIndicator);
    } else {
      this.bubblesort(numbers, 0, output, testIndicator);
    }
  } else {
    for (var i=0; i<sortedNumbers.length; i+=numbers.length) {
         arrayOfArrays.push(sortedNumbers.slice(i,i+numbers.length));
    }
  }
  return arrayOfArrays;
}
