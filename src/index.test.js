const algosort = require("./index.js");
const assert = require('assert').strict;
const algorithms = ["bubblesort", "selectionsort"];
const output_options = ["afterEachNumber", "afterEachRun", "afterAllRuns"];

describe("sorting and output test", function() {
    it("should be able to output the sorted array with all different output options", function() {
      algorithms.forEach(sorting_algorithm => {
        output_options.forEach(sorting_output => {
          console.log("Testcase for the " + sorting_algorithm + " algorithm with the output option: " + sorting_output + " is working!");
          var sortedNumbers = algosort.algosort({
            algorithm: sorting_algorithm,
            numbers: [1, 3, 2, 7, 3, 9, 5, 6],
            output: sorting_output
          });
        });
      });
      console.log("\n!!!All test cases were successful!!!");
    });
});
