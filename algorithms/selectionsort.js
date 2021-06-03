var sortedNumbers = [];
var arrayOfArrays = [];

exports.selectionsort = function (numbers, i, output, testIndicator) {
  if (output === "afterEachNumber") {
    sortedNumbers = sortedNumbers.concat(numbers);
    if (testIndicator == numbers.length-1)
      console.log('In This case the output is the same as with the option "afterEachRun", because of other algorithm structure!');
  } else if (output === "afterEachRun") {
    sortedNumbers = sortedNumbers.concat(numbers);
    if (testIndicator == numbers.length-1)
      console.log('In This case the output is the same as with the option "afterEachNumber", because of other algorithm structure!');
  } else if (output === "afterAllRuns") {
    if (testIndicator == numbers.length-1)
      sortedNumbers = sortedNumbers.concat(numbers);
  } else
    return `"${output}" is no valid output option! \n\n Output options: "afterEachNumber", "afterEachRun" and "afterAllRuns"` ;

  var min = i;
  for (var j = i; j < numbers.length; j++){
      if (numbers[j] <= numbers[min]){
        min = j;
      }
  }

  var smallestNumber = numbers[min];
  numbers[min] = numbers[i];
  numbers[i] = smallestNumber;
  testIndicator++;

  if (testIndicator < numbers.length) {
    if (i < numbers.length) {
      i++;
      this.selectionsort(numbers, i, output, testIndicator);
    } else {
      console.error("There is an error!");
    }
  } else {
    for (var i=0; i<sortedNumbers.length; i+=numbers.length) {
         arrayOfArrays.push(sortedNumbers.slice(i,i+numbers.length));
    }
  }
  return arrayOfArrays;
}
