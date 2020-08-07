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
  }
}

form.addEventListener("submit", generarPrediccion);

console.log("Iniciando programa");
