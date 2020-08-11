const dispertionGraph = document.getElementById("dispertion-graph");
const linearGraph = document.getElementById("linear-graph");

const linearChart = new Chart(linearGraph, {
  type: 'line',
  data: [0,10,20,30],
  options: {
    responsive: true
  }
})

const dispertionChart = new Chart(dispertionGraph,{
  type: 'scatter',
  data: {
    datasets: [{
      label: 'Scatter Dataset',
      data: [{
          x: -10,
          y: 0
      }, {
          x: 0,
          y: 10
      }, {
          x: 10,
          y: 5
      }]
  }]
  },
  options: {
    responsive: true
  }
})