// http://www.tutorialsteacher.com/d3js/create-svg-elements-in-d3js

d3.select("p").style("color", "green");
d3.select("#p2").style("color", "blue");

// Draw SVG Line with D3 ========

  // We create variables for the SVG's width and height. It is good to have them in variables so that you can change them at one place without having to go through the entire code in case you decide to change your SVG's dimensions.
  var width = 500;
  var height = 500;

  // Next, we select the body element and append our SVG element to it and set SVG's width and height. We store the reference of this SVG in a variable called svg, so that we can use it later.

  //Create SVG element
  var svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // Then we append a line element to our SVG and provide it with the x1, y1 x2, y2 and stroke attributes using attr() function.

  // In the example above, we get a straight line without a gradient since we specified the same y-coordinates for both the start and end points.

  // Using the same line, but using different y-coordinates, we can get a line with a gradient.

    //Create line element inside SVG
  svg.append("line")
    .attr("x1", 100)
     .attr("x2", 500)
     .attr("y1", 50)
     .attr("y2", 50)
     .attr("stroke", "red")


// Draw SVG Circle with D3===========
  var width = 500;
  var height = 500;

    //Create SVG element
    var svg = d3.select("body")
                .append("svg")
                .attr("width", width)
                .attr("height", height);

    //Append circle
    svg.append("circle")
       .attr("cx", 250)
       .attr("cy", 50)
       .attr("r", 50)



// Simple Horizontal Bar Chart in D3
var data = [5, 10, 12];

var width = 200,
    scaleFactor = 10,
    barHeight = 20;

var graph = d3.select("body")
              .append("svg")
              .attr("width", width)
              .attr("height", barHeight * data.length);

var bar = graph.selectAll("g")
              .data(data)
              .enter()
              .append("g")
              .attr("transform", function(d, i) {
                  return "translate(0," + i * barHeight + ")";
              });

bar.append("rect")
   .attr("width", function(d) {
       return d * scaleFactor;
   })
   .attr("height", barHeight - 1);

bar.append("text")
   .attr("x", function(d) { return (d*scaleFactor); })
   .attr("y", barHeight / 2)
   .attr("dy", ".35em")
   .text(function(d) { return d; });



// SVG Circle Chart ==========
var width = 500;
var height = 500;

var data = [10, 15, 20, 25, 30];

// We will use this to give a color gradient to our circles - one color per circle.
var colors = ['#ffffcc','#c2e699','#78c679','#31a354','#006837'];

var svg = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

// Next, we select our body element and append the SVG to the body. We also specify the width and height of our SVG using the predefined variables; viz. width and height.

// var g = svg.selectAll("g") creates group element to hold the circles.
//
// .data(data) binds our data array to the group elements.
//
// .enter() creates placeholders for our group elements.
//
// .append("g") appends group elements to our page.

var g = svg.selectAll("g")
            .data(data)
            .enter()
            .append("g")
            .attr("transform", function(d, i) {
                return "translate(0,0)";
            })

// We set the x-coordinate of the center of each circle. Here, we are multiplying the circle's index with 100 and add some padding between the circles.
g.append("circle")
  .attr("cx", function(d, i) {
      return i*100 + 50;
  })

// Next, we set the y-coordinate of the center of each circle. Because we want our circles oriented in the same line horizontally, we have kept the y-coordinate uniform across our circles.
  .attr("cy", function(d, i) {
      return 100;
  })

  // Now, we set the radius of each circle. We want the size of our circles to correspond to the data values. So, bigger the data value, bigger our circle. We set the data value as the radius of each circle. But since our data values are quite small, they won't correspond to pixel values that will be clearly visible on the screen. To resolve this, we have multiplied our data value with a constant "1.5" to increase the circle's size.

  .attr("r", function(d) {
      return d*1.5;
  })
  .attr("fill", function(d, i){
      return colors[i];
  })
// The above code fills each circle with a color from our color array. We use the index of the data value to fetch its corresponding color from the color array. This will paint each circle in a different color.

g.append("text")
 .attr("x", function(d, i) {
     return i * 100 + 40;
 })
 .attr("y", 105)
 .attr("stroke", "teal")
 .attr("font-size", "12px")
 .attr("font-family", "sans-serif")
 .text(function(d) {
     return d;
 });


 // x-axis in D3 ======

 var width = 400,
       height = 100;

   var data = [10, 15, 20, 25, 30];

   // Append SVG
   var svg = d3.select("body")
               .append("svg")
               .attr("width", width)
               .attr("height", height);

   // Create scale
   var scale = d3.scaleLinear()
                 .domain([d3.min(data), d3.max(data)])
                 .range([0, width - 100]);

   // Add scales to axis
   var x_axis = d3.axisBottom()
                  .scale(scale);

   //Append group and insert axis
   svg.append("g")
      .call(x_axis);


// Y-Axis with D3========================
var width = 400, height = 400;

 var data = [10, 15, 20, 25, 30];
 var svg = d3.select("body")
             .append("svg")
             .attr("width", width)
             .attr("height", height);

 var scale = d3.scaleLinear()
               .domain([d3.min(data), d3.max(data)])
               .range([height/2, 0]);

 var y_axis = d3.axisLeft()
               .scale(scale);

 svg.append("g")
    .attr("transform", "translate(50, 10)")
    .call(y_axis);


// Combine both x and y axis ==========

var width = 400, height = 400;

    var data = [10, 15, 20, 25, 30];
    var svg = d3.select("body")
                .append("svg")
                .attr("width", width)
                .attr("height", height);

    var xscale = d3.scaleLinear()
                   .domain([0, d3.max(data)])
                   .range([0, width - 100]);

    var yscale = d3.scaleLinear()
                   .domain([0, d3.max(data)])
                   .range([height/2, 0]);

    var x_axis = d3.axisBottom()
                   .scale(xscale);

    var y_axis = d3.axisLeft()
                   .scale(yscale);

    svg.append("g")
       .attr("transform", "translate(50, 10)")
       .call(y_axis);

    var xAxisTranslate = height/2 + 10;

    svg.append("g")
            .attr("transform", "translate(50, " + xAxisTranslate  +")")
            .call(x_axis)
