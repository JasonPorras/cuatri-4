import { fetchRandomJoke, getJokeById } from "/js/apiConection/apiConection.js";

const id = new URLSearchParams(window.location.search).get("id");


async function hola(){
  const a = id;
  const b = await getJokeById(a)
  console.log(b,"prueba");
}

export function jokeRandom() {
  hola()

  fetchRandomJoke()
    .then((b) => {
      const jokes = document.getElementById("jokes");
      jokes.innerHTML = `<p>${b.joke}</p>`;
    });
}