import { fetchSearchJoke } from "./apiConection/apiConection.js";

let lastValue;

export function jokeSearch() {
  const listJoke = document.getElementById("listJoke");
  listJoke.className = "styleList";
  const input = document.getElementById("inputSearch");
  const value = input.value;

  if (value === "") {
    showErrorMessage("Input cannot be empty!");
    lastValue = "";
  } else if (value !== lastValue) {
    fetchSearchJoke(value).then((results) => {
      updateJokeList(results);
      lastValue = value;
    });
  }
}

//this funtion is for print in the DOM.
function updateJokeList(results) {
  const listJoke = document.getElementById("listJoke");
  listJoke.innerHTML = "";

  if (results.length > 0) {
    results.forEach((result) => {
      listJoke.innerHTML += `<li><a href="./shopDocuments/shop.html?id=${result.id}">${result.joke}</a></li>`;
    });
  } else {
    showErrorMessage("No results.");
  }
}

//this funtion is for error in search input.
function showErrorMessage(message) {
  const listJoke = document.getElementById("listJoke");
  listJoke.innerHTML = `<li>${message}</li>`;
}
