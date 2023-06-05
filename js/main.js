import { jokeRandom  } from "./printJokes/printRandomJoke.js";
import { jokeSearch } from "./printJokes/printSearchJoke.js";
import { createdElementsRandomJoke } from "./creatorElementsJokes/createdRandomJoke.js";
import { createdElementsSearchJoke } from "./creatorElementsJokes/createdSearchJoke.js";


createdElementsRandomJoke();
createdElementsSearchJoke();

//we select the IDs of the DOM
const btnSearch = document.getElementById("btnSearch");
const randomButton = document.getElementById("randomButton");

randomButton.addEventListener("click", jokeRandom);
btnSearch.addEventListener("click", jokeSearch);
