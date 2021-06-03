const algosort = require("./index.js");
const assert = require('assert').strict;

describe("sorting and output test", function() {
    it("should be able to output the sorted array with all different output options", function() {
        var sortedNumbers = algosort.algosort({
      		algorithm: 'bubblesort',
      		numbers: [1, 3, 2, 7, 3, 9, 5, 6],
      		output: 'afterEachNumber'
  	   });

	console.log(sortedNumbers);
    });
});
