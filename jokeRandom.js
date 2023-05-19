import { api } from "./api.js";
import { config } from "./api.js";
//this funtion is for create random jokes.
export function jokeRandom() {
fetch(api, config)
    .then((response) => response.json())
    .then((information) => {
jokes.innerHTML = `<p>${information.joke}</p>`;
    })
    .catch((error) => {
errorMessage("Error: " + error);
    });
}
