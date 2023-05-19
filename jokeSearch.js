import { api } from "./api.js";
import { config } from "./api.js";

let lastValue = "";

export function jokeSearch() {
  const listJoke = document.getElementById("listJoke");
  const input = document.getElementById("inputSearch");
  const value = input.value;

  if (value === "") {
    alert("Input no puede estar vacio.");
    listJoke.innerHTML = "";
  } else if (value !== lastValue) {
    fetch(api + "search?term=" + value, config)
      .then((response) => response.json())
      .then((information) => {
        const { results } = information;

        listJoke.innerHTML = "";

        if (results.length > 0) {
          results.forEach((result) => {
            listJoke.innerHTML += `<li>${result.joke}</li>`;
            listJoke.className = "time";
          });
        } else {
          listJoke.innerHTML = "<li>No hubo resultados</li>";
        }

        lastValue = value;
      })
      .catch((error) => {
        errorMessage("Error: " + error);
      });
  }
}
