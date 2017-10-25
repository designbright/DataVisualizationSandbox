
# Intro to Data Visualization with Chart.js
http://tobiasahlin.com/blog/introduction-to-chartjs/

We’re going to create a simple but powerful responsive line graph, visualizing the world population during the last 500 years, and a prediction for 2050

We’ll customize the graph to use our own colors, and you’ll be able to click the legends to toggle the visibility of the corresponding lines, as well as hover the points for details.

## Process

1. Add Chart.js
First of we need to add Chart.js to our page so that we can use the library. For this project, I’ve prepared a simple playground with a HTML file with only the essentials. Download the starting point files
http://tobiasahlin.com/demo/chartjs-intro/static/starting-point.zip

To use Chart.js, link the library in the <head> of the index.html file. Copy and paste this line of code in row 5 of index.html
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>

2. Prepare a place in HTML to render the chartjs-intro

The last thing we need to prepare before we can start visualizing our data is to define an area in our HTML where we want to draw the graph.

For Chart.js you do this by adding a canvas element, and setting width and height to define the proportions of your graph.

On row 13 in index.html, copy and paste this row to create your canvas element:
<canvas id="myChart" width="1600" height="900"></canvas>

3. Prepare the data
The data we’re using is from Wikipedia’s article on World population, and includes a world population prediction from UN’s World Population Prospects report. Here’s the raw data that we’ll be using:

To draw lines and add labels along axes, Chart.js expects the data to be passed in the form of a set of arrays, like so: [10, 4, 7].

* We’re going to use 6 arrays in total:
    * One for all the year labels to be shown along the X axis (1500-2050)
    * One array for each country, containing the population data.

So all we need to do is copy each row in our table above, separate each value with a comma, and then end and start the list with []-brackets.

// Our labels along the x-axis
var years = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050];
// For drawing the lines
var africa = [86,114,106,106,107,111,133,221,783,2478];
var asia = [282,350,411,502,635,809,947,1402,3700,5267];
var europe = [168,170,178,190,203,276,408,547,675,734];
var latinAmerica = [40,20,10,16,24,38,74,167,508,784];
var northAmerica = [6,3,2,2,7,26,82,172,312,433];

Copy all of these rows, and paste them into script.js.

4. Draw the Graph
define what graph we want to draw, and pass in the data that we want to visualize. Let’s start by drawing one single line to see if we can get it to work: below the data that you just pasted into script.js, add these lines of JavaScript:

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      {
        data: africa
      }
    ]
  }
});
