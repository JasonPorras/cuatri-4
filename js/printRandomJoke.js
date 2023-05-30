import  {fetchRandomJoke}  from "./apiConection.js";

//this funtion is for print random jokes.
export function jokeRandom() {

  fetchRandomJoke()
  
    .then((joke) => {
      const jokes = document.getElementById("jokes");
      jokes.innerHTML = `<a href="./shopDocuments/shop.html">${joke}</a>`;
    });
}
