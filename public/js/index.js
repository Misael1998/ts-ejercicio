const _poblacionInicial = document.getElementById("poblacion-inicial");
const _anios = document.getElementById("anios");
const _tasaNatalidad = document.getElementById("tasa-natalidad");
const _tasaMortalidad = document.getElementById("tasa-mortalidad");
const _tasaMigracion = document.getElementById("tasa-migracion");
const _tasaInmigracion = document.getElementById("tasa-inmigracion");
const form = document.getElementById("form");

function generarPrediccion(e) {
  e.preventDefault();
  if (
    _poblacionInicial.value.trim() === "" ||
    _anios.value.trim() === "" ||
    _tasaNatalidad.value.trim() === "" ||
    _tasaMortalidad.value.trim() === "" ||
    _tasaMigracion.value.trim() === "" ||
    _tasaInmigracion.value.trim() === ""
  ) {
    alert("Tiene que llenar todos los campos");
  } else {
    let prediccion = crecimiento(
      parseInt(_poblacionInicial.value),
      parseInt(_anios.value),
      parseInt(_tasaMortalidad.value) / 100,
      parseInt(_tasaNatalidad.value) / 100,
      parseInt(_tasaMigracion.value) / 100,
      parseInt(_tasaInmigracion.value) / 100
    );    
    console.log(prediccion);
    llenarChart(prediccion);
    document.getElementById('c-tasa-nat').innerHTML = _tasaNatalidad.value; 
    document.getElementById('c-tasa-mot').innerHTML = _tasaMortalidad.value; 
    document.getElementById('c-tasa-em').innerHTML = _tasaMigracion.value; 
    document.getElementById('c-tasa-in').innerHTML = _tasaInmigracion.value; 
  }

}

form.addEventListener("submit", generarPrediccion);

console.log("Iniciando programa");

const dispertionGraph = document.getElementById("dispertion-graph");
const linearGraph = document.getElementById("linear-graph");

const linearChart = new Chart(linearGraph, {
  type: 'line',
  data: {
    labels: [],
    datasets: [
      {
        label: "Poblacion Anual",
        borderColor: '#0D5FD9',
        backgroundColor: '#0D5FD9',
        data: []
      }]
  },
  options: {
    responsive: true
  }
})

const dispertionChart = new Chart(dispertionGraph,{
  type: 'scatter',
  data: {
    datasets: [{
      label: 'Nacimientos', 
      borderColor: '#0D5FD9',
      backgroundColor: '#0D5FD9',
      data: [{}]
    },
    {
      label: 'Muertes', 
      borderColor: '#264D87',
      backgroundColor: '#264D87',
      data: [{}]
      },
    {
      label: 'Migrantes', 
      borderColor: '#8CB0E6',
      backgroundColor: '#8CB0E6',
      data: [{}]
    },
    {
      label: 'Inmigrantes', 
      borderColor: '#17253B',
      backgroundColor: '#17253B',
      data: [{}]}
    ]},
  options: {
    responsive: true,
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom'
      }]
    }
  }
})

function llenarChart(obj){
  let arrPob = linearChart.data.datasets[0].data;
  let arrNacimientos = dispertionChart.data.datasets[0].data;
  let arrMuertes = dispertionChart.data.datasets[1].data;
  let arrMigrantes = dispertionChart.data.datasets[2].data; 
  let arrInmigrantes = dispertionChart.data.datasets[3].data;
  let xy = {x: 0, y: 0};
  let xlinear = [];
  
  for(i=0; i<obj.length; i++){
    let pob = obj[i].poblacion;
    let nacim = obj[i].nacidos;
    let muer = obj[i].muertos;
    let migrant = obj[i].migrantes;
    let inmigr = obj[i].inmigrantes;
    xlinear.push(i);
    xy.x = i;
  
    xy.y = nacim;
    arrNacimientos.push(JSON.parse(JSON.stringify(xy)));

    xy.y = muer;
    arrMuertes.push(JSON.parse(JSON.stringify(xy)));

    xy.y = migrant;
    arrMigrantes.push(JSON.parse(JSON.stringify(xy)));

    xy.y = inmigr;
    arrInmigrantes.push(JSON.parse(JSON.stringify(xy)));

    arrPob.push(JSON.parse(JSON.stringify(pob)));
    if((obj.length-1)==i){
      document.getElementById('total-nacidos').innerHTML = nacim;
      document.getElementById('total-muertos').innerHTML = muer;
    }
  }
  dispertionChart.data.datasets[0].data = arrNacimientos;
  dispertionChart.data.datasets[1].data = arrMuertes;
  dispertionChart.data.datasets[2].data = arrMigrantes;
  dispertionChart.data.datasets[3].data = arrInmigrantes;
  linearChart.data.labels = xlinear;
  linearChart.data.datasets[0].data = arrPob;
  dispertionChart.update();
  linearChart.update();
}


function clean(){
  document.getElementById("poblacion-inicial").value = '';
  document.getElementById("anios").value = '';
  document.getElementById("tasa-natalidad").value = '';
  document.getElementById("tasa-mortalidad").value = '';
  document.getElementById("tasa-migracion").value = '';
  document.getElementById("tasa-inmigracion").value = '';
 
  dispertionChart.data.datasets[0].data = [{}];
  dispertionChart.data.datasets[1].data = [{}];
  dispertionChart.data.datasets[2].data = [{}];
  dispertionChart.data.datasets[3].data = [{}];
  linearChart.data.labels = [];
  linearChart.data.datasets[0].data = [];
  dispertionChart.update();
  linearChart.update();

  document.getElementById('total-nacidos').innerHTML = ' - ';
  document.getElementById('total-muertos').innerHTML = ' - ';
  document.getElementById('c-tasa-nat').innerHTML = '0'; 
  document.getElementById('c-tasa-mot').innerHTML = '0'; 
  document.getElementById('c-tasa-em').innerHTML = '0'; 
  document.getElementById('c-tasa-in').innerHTML = '0'; 
}