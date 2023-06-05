import { jokeRandom  } from "./printRandomJokeProduct.js";
import { createdElementsRandomJoke } from "/js/creatorElementsJokes/createdRandomJoke.js";

jokeRandom();
createdElementsRandomJoke();

//we select the IDs of the DOM
const randomButton = document.getElementById("randomButton");
randomButton.addEventListener("click", jokeRandom);
