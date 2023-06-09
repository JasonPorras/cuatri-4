import { fetchRandomJoke, getJokeById } from "/js/apiConection/apiConection.js";


// Función para obtener un chiste aleatorio y mostrarlo
export async function printRandomJokeById() {
  const id = new URLSearchParams(window.location.search).get("id");
  const joke = await getJokeById(id);
  const jokes = document.getElementById("jokes");
  jokes.innerHTML = `<p>${joke.joke}</p>`;
}