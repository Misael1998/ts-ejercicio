// const dispertionGraph = document.getElementById("dispertion-graph");
// const linearGraph = document.getElementById("linear-graph");

// const linearChart = new Chart(linearGraph, {
//   type: 'line',
//   data: [0,10,20,30],
//   options: {
//     responsive: true
//   }
// })

// const dispertionChart = new Chart(dispertionGraph,{
//   type: 'scatter',
//   data: {
//     datasets: [{
//       label: 'Nacimientos', 
//       borderColor: 'Green',
//       backgroundColor: 'Green',
      
//       data: [{
//           x: -10,
//           y: 4
//       }, {
//           x: 5,
//           y: 6
//       }, {
//           x: 10,
//           y: 3
//       },
//     ]
//   },
//   {
//     label: 'Muertes', 
//     borderColor: 'Red',
//     backgroundColor: 'Red',
    
//     data: [{
//         x: -10,
//         y: 0
//     }, {
//         x: 0,
//         y: 10
//     }, {
//         x: 10,
//         y: 5
//     },
//   ]
// },
// {
//   label: 'Migrantes', 
//   borderColor: 'Blue',
//   backgroundColor: 'Blue',
//   // pointBackgroundColor:['blue','green','red'],
//   data: [{
//       x: -10,
//       y: 0
//   }, {
//       x: 0,
//       y: 10
//   }, {
//       x: 10,
//       y: 5
//   },
// ]
// },
// {
//   label: 'Inmigrantes', 
//   borderColor: 'purple',
//   backgroundColor: 'purple',
  
//   data: [{
//       x: -10,
//       y: 0
//   }, {
//       x: 0,
//       y: 10
//   }, {
//       x: 10,
//       y: 5
//   },
// ]
// }]
//   },
//   options: {
//     responsive: true,
//     scales: {
//       xAxes: [{
//           type: 'linear',
//           position: 'bottom'
//       }]
//   }
//   }
// })