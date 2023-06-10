import { getJokeById } from "/js/apiConection/apiConection.js";
import { changeLabelJoke } from "/js/printJokes/printRandomJoke.js";

// Función para obtener un chiste aleatorio y mostrarlo
export async function printRandomJokeById() {
  
  const id = new URLSearchParams(window.location.search).get("id");
  const joke = await getJokeById(id);
  const jokes = document.getElementById("jokes");
  jokes.innerHTML = `<p>${joke.joke}</p>`;

  const randomButton = document.getElementById("randomButton");
  randomButton.addEventListener("click", changeLabelJoke);
}

export async function prueba(){
  const id = new URLSearchParams(window.location.search).get("id");
  const joke = await getJokeById(id);
 const jokeProduct = document.getElementById("jokeProduct")
 console.log(jokeProduct);
jokeProduct.textContent = `${joke.joke}`
}