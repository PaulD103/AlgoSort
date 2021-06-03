# AlgoSort

## Command line and Web

This node package is for all javascript developers who are interested in sorting algorithms. This package gives you the possibility to choose between many different sorting algorithms. This package will output a two dimensional array of all numbers in different sorting states. <br>

### Installation
`npm i algosort` <br><br>

## Command line

### Code
```javascript
const algosort = require("algosort");

var sortedNumbers = algosort.algosort({
    algorithm: 'bubblesort',
    numbers: [1, 3, 2, 7, 3, 9, 5, 6],
    output: 'afterEachNumber'
  });

console.log(sortedNumbers);
```

### Options

AlgoSort supports 2 algorithm (at the moment), 3 different options for the output, depending on the algorithm and any length of the array, which is going to be sorted:

* *algorithm* - _bubblesort | selectionsort_ (Default: _bubblesort_ | More options are coming soon!)
* *output* - _afterEachNumber | afterEachRun | afterAllRuns_ (Default: _afterEachNumber_!)
* *numbers* - _array[int, int, int]_
<br>

## Web
### Installation
To run this on a local web page, you need to install a node package: <br>
`npm i parcel -g` <br>

### Usage
To use this sorting animation on your website, you need to add a link to the _graphical.js_ file in the head of your _index.html_ file. <br>
You do this with this line of code: <br>
```html
<script src="./node_modules/algosort/src/graphical.js"></script>
```

The whole code would look like this:
```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Test graphical bublesort</title>
    <script src="./node_modules/algosort/src/graphical.js"></script>
  </head>
  <body>
    <canvas class='algosort' speed='50' bars='20' barColor='blue' algorithm='selectionsort' output='afterEachNumber' width='1000px' height='250px'></canvas>
  </body>
</html>
```

### Options

AlgoSort for Web works very similar to the CLI of this package. The only difference in this case is, that you need to add those options in a _canvas_. <br>
To use this package you need to add _"algosort"_ as the class of this element like this:
```html
<canvas class='algosort' speed='50' bars='20' barColor='blue' algorithm='selectionsort' output='afterEachNumber' width='1000px' height='250px'></canvas>
```

The options you have: <br>
* *speed* - _10 -> 10000_
* *bars* - _2 -> 1000_
* *barColor* - _any color you want_
* *algorithm* - _bubblesort | selectionsort_ (Default: _bubblesort_ | More options are coming soon!)
* *output* - _afterEachNumber | afterEachRun | afterAllRuns_ (Default: _afterEachNumber_!)
<br>

### Run your _index.html_ file
`parcel index.html`

### Open your _index.html_ file
`http://localhost:1234`
