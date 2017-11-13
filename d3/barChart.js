// http://www.tutorialsteacher.com/d3js/create-bar-chart-using-d3js

// LEARN HOW TO CREATE A BAR CHART WITH D3

// Dataset in XYZ.csv file=======
// year,value
// 2011,45
// 2012,47
// 2013,52
// 2014,70
// 2015,75
// 2016,78

var data = [2011,2012,2013, 2014, 2014,2015,2016, 45, 47, 52, 70, 75, 78];


// Step 1: Add SVG Tag to HTML
  // <svg width="600" height="500"></svg>

// Step 2: Define scales for bar Chart
var svg = d3.select("svg"),
  margin = 200,
  width = svg.attr("width") - margin,
  height = svg.attr("height") - margin;


var xScale = d3.scaleBand().range ([0, width]).padding(0.4),
// We use d3.scaleBand() for the x-axis. scaleBand() is used to construct a band scale. This is useful when our data has discrete bands. In our case, these are the year values - 2011, 2012, 2013, etc. We would need to provide a domain and range to our scale function. Remember domain is the input and range is the output. The scaleBand() function creates an empty domain that we can specify after loading our data. The range for the band is the width of the SVG. Also, since we have discrete bands, it would be nice to have some space or padding between the bars. For this, we add a padding of 0.4 to our discrete scale. You can change the padding value to increase or decrease the space between your bars.

yScale = d3.scaleLinear().range ([height, 0]);
// Since this is the vertical axis, the range here would be the height of the SVG.

var g = svg.append("g")
 .attr("transform", "translate(" + 100 + "," + 100 + ")");
 // The above code added a group element to our SVG. We will add our axes and bars to the group element. We add a transform attribute to position our graph with some margin.

 // Load data from CSV file (if applicable) and add axes to SVG

 // d3.csv("XYZ.csv", function(error, data) {
 //   if (error) {
 //       throw error;
 //   }

 // Now that we have loaded our data, we can provide our domain values to the x and y scales. The above code provides x axis. We use data.map() to map our discrete year values to the x scale.

   xScale.domain(data.map(function(d) { return d.year; }));

  // And we use d3.max() function to input our domain [0,max] value for y axis.
   yScale.domain([0, d3.max(data, function(d) { return d.value; })]);

  //  We add another group element to have our x-axis grouped under one group element. We then use the transform attribute to shift our x-axis towards the bottom of the SVG. We then insert x-axis on this group element using .call(d3.axisBottom(x)).

   g.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xScale));

   g.append("g")
    .call(d3.axisLeft(yScale).tickFormat(function(d){
        return "$" + d;
    }).ticks(10));
    .append("text")
    .attr("y", 6)
    .attr("dy", "0.71em")
    .attr("text-anchor", "end")
    .text("value");

    g.selectAll(".bar")
         .data(data)
         .enter().append("rect")
         .attr("class", "bar")
         .attr("x", function(d) { return xScale(d.year); })
         .attr("y", function(d) { return yScale(d.value); })
         .attr("width", xScale.bandwidth())
         .attr("height", function(d) { return height - yScale(d.value); });
