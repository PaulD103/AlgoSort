import { algosort } from "./index.js";

class Bar {
  constructor(width, height, posx, posy) {
    this.width = width;
    this.height = height;
    this.posx = posx;
    this.posy = posy;
  }
  draw(ctx, color) {
    ctx.fillStyle = color;
    ctx.fillRect(this.posx, this.posy, this.width, this.height);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let graphs = document.querySelectorAll('.algosort');
  graphs.forEach(graph => {
    if (document.getElementsByClassName('algosort')[0].toString() === "[object HTMLCanvasElement]") {
      let width = graph.getAttribute("width");
      let height = graph.getAttribute("height");
      width = width.substring(0, width.length - 2);
      height = height.substring(0, height.length - 2);
      let ctx = graph.getContext("2d");

      let barNumber;
      if (graph.getAttribute("bars") > 2 && graph.getAttribute("bars") < 1000) {
        barNumber = graph.getAttribute("bars");
      } else {
        ctx.font = '20px sans-serif';
        ctx.fillText(`The number of bars must be less than 1000 and more than 2! Current bar number: ${graph.getAttribute("bars")}`, 10, 30);
        console.error(`The number of bars must be less than 1000 and more than 2! Current bar number: ${graph.getAttribute("bars")}`);
        barNumber = 0;
      }
      let bars = new Array(parseInt(barNumber));

      function drawBars(i) {
        bars[i].draw(ctx, graph.getAttribute("barColor"));
      }
      var numbers = [];
      for (let i = 0; i < barNumber; i++) {
        let barHeight = Math.random()*height;
        numbers.push(barHeight);
      }
      var sortedNumbers = algosort({
        algorithm: graph.getAttribute("algorithm"),
        numbers: numbers,
        output: graph.getAttribute("output")
      });
      let speed;
      if (graph.getAttribute("speed") > 10 && graph.getAttribute("speed") < 10000) {
        speed = graph.getAttribute("speed")
      } else {
        ctx.font = '20px sans-serif';
        ctx.fillText(`The speed value must be less than 10000 and more than 10! Current speed value: ${graph.getAttribute("speed")}`, 10, 30);
        console.error(`The speed value must be less than 10000 and more than 10! Current speed value: ${graph.getAttribute("speed")}`);
        speed = false;
      }
      function animation(i) {
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, width, height);
        for (let j = 0; j < sortedNumbers[i].length; j++) {
          bars[j] = new Bar(width/barNumber, sortedNumbers[i][j], width/barNumber*j, height-sortedNumbers[i][j]);
          drawBars(j);
        }
        if (i < sortedNumbers.length-1) {
          setTimeout(() => {
            i++;
            animation(i);
          },  graph.getAttribute("speed"))
        } else {
          console.log("Sorted!");
        }
      }
      if (sortedNumbers !== `"${graph.getAttribute("output")}" is no valid output option! \n\n Output options: "afterEachNumber", "afterEachRun" and "afterAllRuns"` && speed != false && bars.length > 1 && sortedNumbers !== `There is no algorithm called ${graph.getAttribute("algorithm")}! \n\n Algorithm options: "bubblesort" and "selectionsort"`) {
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, width, height);
        console.log(sortedNumbers);
        animation(0);
      } else if (sortedNumbers === `There is no algorithm called ${graph.getAttribute("algorithm")}! \n\n Algorithm options: "bubblesort" and "selectionsort"`) {
        ctx.font = '20px sans-serif';
        ctx.fillText(`There is no algorithm called "${graph.getAttribute("algorithm")}"!`, 10, 30);
      }
    } else {
      document.body.innerHTML = `<h1>The html object must be a canvas!</h1>`;
      console.error("The html object must be a canvas!");
    }
  });
});
