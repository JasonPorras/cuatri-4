import  {fetchRandomJoke}  from "../apiConection/apiConection.js";

//this funtion is for print random jokes.
export function jokeRandom() {

  fetchRandomJoke()
  
    .then((information) => {
      const jokes = document.getElementById("jokes");
      jokes.innerHTML = `<a href="./shopDocuments/shop.html?id=${information.id}">${information.joke}</a>`;
    });
}
