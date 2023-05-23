import { api, config } from "./jokeRandom.js";

let lastValue;

export function jokeSearch() {
  const listJoke = document.getElementById("listJoke");
  listJoke.className = "styleList";
  const input = document.getElementById("inputSearch");
  const value = input.value;

  if (value === "") {
    listJoke.innerHTML = "<li>Input cannot be empty!</li>";
    lastValue = "";
  } else if (value !== lastValue) {
    fetch(api + "search?term=" + value, config)
      .then((response) => response.json())
      .then((information) => {
        const { results } = information;

        listJoke.innerHTML = "";

        if (results.length > 0) {
          results.forEach((result) => {
            listJoke.innerHTML += `<li>${result.joke}</li>`;
          });
        } else {
          listJoke.innerHTML = "<li>No results</li>";
        }

        lastValue = value;
      })
      .catch((error) => {
        errorMessage("Error: " + error);
      });
  }
}