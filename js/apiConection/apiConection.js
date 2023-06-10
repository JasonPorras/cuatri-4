const api = "https://icanhazdadjoke.com/";
const config = {
  headers: {
    Accept: "application/json",
  },
}

//this funtion is for connect random jokes.
export function fetchRandomJoke() {
  return fetch(api, config)
    .then((response) => response.json())
    .then((information) => {
      return {
        id: information.id,
        joke: information.joke
      };
    })
    .catch(catchError);
}

//this funtion is for connect Filter-Search jokes.
export function fetchSearchJoke(value) {
  return fetch(api + "search?term=" + value, config)
    .then((response) => response.json())
    .then((information) => information.results)
    .catch(catchError);
}

export async function getJokeById(id) {
  return fetch(`${api}j/${id}`,config)
    .then((response) => response.json())
    .catch(catchError);
}

//this funtion is for error in catch.
function catchError(error) {
  errorMessage("Error: " + error);
}