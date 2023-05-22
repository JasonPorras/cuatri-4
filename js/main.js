import { jokeRandom  } from "./jokeRandom.js";
import { jokeSearch } from "./jokeSearch.js";


//we select the IDs of the DOM
const btnSearch = document.getElementById("btnSearch");
const jokes = document.getElementById("jokes");
const randomButton = document.getElementById("randomButton");

randomButton.addEventListener("click", jokeRandom);
btnSearch.addEventListener("click", jokeSearch);

//Static joker in the page
if (jokes.innerHTML === "") {
jokeRandom();
}
