const api = "https://icanhazdadjoke.com/";
const config = {
  headers: {
    Accept: "application/json",
  },
};
let lastValue = "";

//we select the IDs of the DOM
const btnSearch = document.getElementById("btnSearch");
const input = document.getElementById("inputSearch");
const listJoke = document.getElementById("listJoke");
const jokes = document.getElementById("jokes");
const randomButton = document.getElementById("randomButton");

randomButton.addEventListener("click", jokeRandom);
btnSearch.addEventListener("click", jokeSearch);

//Static joker in the page
if (jokes.innerHTML === "") {
  jokeRandom();
}

//this funtion is for create random jokes.
function jokeRandom() {
  fetch(api, config)
    .then((response) => response.json())
    .then((information) => {
      jokes.innerHTML = `<p>${information.joke}</p>`;
    })
    .catch((error) => {
      errorMessage("Error: " + error);
    });
}

//this funtion is for filter jokes from the api
function jokeSearch() {
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

//this functions is for API errors
function errorMessage(error) {
  alert(error);
  console.log(error);
}
