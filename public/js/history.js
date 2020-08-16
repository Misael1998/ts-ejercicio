let spinner = document.getElementById("spinner");
let table = document.getElementById("table");

function getDataFromObject(object, modifier = "") {
  let html = "";

  for (data in object) {
    html += `<li><strong>${data}</strong> - ${object[data]}${modifier}<li>`;
  }
  return html;
}

document.addEventListener("DOMContentLoaded", () => {
  table.style.visibility = "hidden";

  db.collection("history")
    .get()
    .then((results) => {
      let tableContent = "";
      results.forEach((doc) => {
        let data = doc.data();
        let rates = getDataFromObject(data.rates, "%");
        let results = getDataFromObject(data.results[data.years]);

        tableContent += `
        <tr>
          <td>${data.date}</td>
          <td>${data.population}</td>
          <td>${data.years}</td>
          <td>
            <ul>
              ${rates}
            <ul>
          </td>
          <td>
          <ul>
          ${results}
          </ul>
          </td>
        </tr>
      `;
      });

      document.getElementById("history").innerHTML = tableContent;
      spinner.style.display = "none";
      table.style.visibility = "visible";
    })
    .catch((err) => {
      console.log("Error");
    });
});
