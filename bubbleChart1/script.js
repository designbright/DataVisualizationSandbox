// For a bubble chart
var ctx = document.getElementById("bubbleChart");
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: ['Manager', 'Director', 'VP Sales', 'VP Marketing'],
      datasets: [
        {
          label: 'Phone',
          backgroundColor: 'blue',
          pointStyle: 'circle',
          data: [{
            x: 1,
            y: 2,
            // r: 25
          }]
        },
        {
          label: 'Demo',
          backgroundColor: 'green',
          data: [{
            x: 3,
            y: 2,
            r: 15
          }]
        },
        {
          label: 'Event',
          backgroundColor: 'yellow',
          data: [{
            x: 4,
            y: 2,
            r: 25
          }]
        },
        {
          label: 'Email',
          backgroundColor: 'pink',
          data: [{
            x: 1,
            y: 2,
            r: 45
          }]
        },
      ]
    },
    options: {
        scales: {
          yAxes: [{
            scaleLabel: {
            display: true,
            labelString: 'Key Players'
          }
        }]
      }
    }
});
