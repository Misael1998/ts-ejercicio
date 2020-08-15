var db;
document.addEventListener("DOMContentLoaded", () => {
  try {
    db = firebase.firestore();
    console.log("Firestore initialize");
  } catch (err) {
    console.log(err);
  }
});

function formatDate() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function saveData(population, years, rates, results) {
  let date = formatDate();
  db.collection("history")
    .add({
      population,
      years,
      rates,
      results,
      date,
    })
    .then((res) => {
      console.log("History save");
    })
    .catch((err) => {
      console.log("Error saving history");
    });
}
