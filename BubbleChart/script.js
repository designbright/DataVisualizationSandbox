// Our labels along the x-axis
var years = [1,2,3,4];
// // For drawing the lines
// var africa = [86,114,106,106,107,111,133,221,783,2478];
// var asia = [282,350,411,502,635,809,947,1402,3700,5267];
// var europe = [168,170,178,190,203,276,408,547,675,734];
// var latinAmerica = [40,20,10,16,24,38,74,167,508,784];
// var northAmerica = [6,3,2,2,7,26,82,172,312,433];

new Chart(document.getElementById("bubbleChart"), {
    type: 'bubble',
    data: {
      labels: 'years',
      datasets: [
        {
          label: ["Email"],
          backgroundColor: "rgba(255,221,50,0.2)",
          borderColor: "rgba(255,221,50,1)",
          data: [{
            x: 4,
            y: 4,
            r: 25
          }]
        }, {
          label: ["Phone"],
          backgroundColor: "rgba(60,186,159,0.2)",
          borderColor: "rgba(60,186,159,1)",
          data: [{
            x: 5,
            y: 4,
            r: 10
          }]
        }, {
          label: ["Demo"],
          backgroundColor: "rgba(0,0,0,0.2)",
          borderColor: "#000",
          data: [{
            x: 2,
            y: 6,
            r: 15
          }]
        }, {
          label: ["Event"],
          backgroundColor: "rgba(193,46,12,0.2)",
          borderColor: "rgba(193,46,12,1)",
          data: [{
            x: 6,
            y: 5,
            r: 10
          }]
        },
        {
          label: ["Event"],
          backgroundColor: "rgba(193,46,12,0.2)",
          borderColor: "rgba(193,46,12,1)",
          data: [{
            x: 4,
            y: 5,
            r: 40
          }]
        },
        {
          label: ["Phone"],
          backgroundColor: "rgba(60,186,159,0.2)",
          borderColor: "rgba(60,186,159,1)",
          data: [{
            x: 3,
            y: 5,
            r: 15
          }]
        },
        {
          label: ["Phone"],
          backgroundColor: "rgba(60,186,159,0.2)",
          borderColor: "rgba(60,186,159,1)",
          data: [{
            x: 1,
            y: 5,
            r: 15
          }]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Interactions'
      }, scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: "Key Players"
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: "Phase in Sales Cycle"
          }
        }]
      }
    }
});
