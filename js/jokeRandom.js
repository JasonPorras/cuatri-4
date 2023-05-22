export const api = "https://icanhazdadjoke.com/";
export const config = {
  headers: {
    Accept: "application/json",
  },
};

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
