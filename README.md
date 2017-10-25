
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

…open up index.html in a browser, refresh and… tada! You created a graph!

## Understanding the Code
**Locate the canvas element that we added to index.html file**

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {

**Using that canvas element, we create a line chart (type: 'line'), and pass along some of our data**

  type: 'line',
  data: {

**labels: years sets our array of years for the labels along the x-axis**

    labels: years,
    datasets: [
      {
**data: africa uses our africa variable to draw the line.**
        data: africa
      }
    ]
  }
});


For every line that we want to create, we add another object to the datasets array. On every object we can make a range of adjustments: we can not only pass the data to draw the line, but we can change the name, change the beavior, and change the looks of the line.

5. Style the Line
Start out by giving our first line a name. After data: africa, add a comma (hey! I’m serious about the comma (remember the comma!), miss it and everything breaks), create a new row, and add label: "Africa":

  {
    data: africa,
    label: "Africa"
  }

  To set the border color and remove the big gray area below the graph, add another comma after label: "Africa" and add these two lines:

    borderColor: "#3e95cd",
    fill: false

Refresh and you should see a blue line named Africa

6. Add the Remaining data

All we need to do now is copy the code for Africa and paste it another four times, adding a comma after every }. Go through the list of lines and make sure that you use all our region variables (asia, europe, etc.), and name the lines accordingly. Once you’re done, it should look something like this:

    {
      data: africa,
      label: "Africa",
      borderColor: "#3e95cd",
      fill: false
    },
    {
      data: asia,
      label: "Asia",
      borderColor: "#3e95cd",
      fill: false
    },
    {
      data: europe,
      label: "Europe",
      borderColor: "#3e95cd",
      fill: false
    },
    {
      data: latinAmerica,
      label: "Latin America",
      borderColor: "#3e95cd",
      fill: false
    },
    {
      data: northAmerica,
      label: "North America",
      borderColor: "#3e95cd",
      fill: false
    }

If you refresh, you should have a graph visualizing the earth’s population over time

# Bar Charts

Bar charts are created by setting type to bar (to flip the direction of the bars, set type to horizontalBar). The colors of the bars are set by passing one color to backgroundColor (all bars will have the same color), or an array of colors.

If you’re passing an array (like in the example below), the colors are assigned to the label and number that share the same index in their respective arrays. I.e., below, “Africa” being the first label, will be set to #3e95cd (the first color), and 2478 (the first number).

    // Bar chart
    new Chart(document.getElementById("bar-chart"), {
        type: 'bar',
        data: {
          labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
              data: [2478,5267,734,784,433]
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Predicted world population (millions) in 2050'
          }
        }
    });
