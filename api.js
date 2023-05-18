const api = "https://icanhazdadjoke.com/";
const config = {
  headers: {
    Accept: "application/json",
  },
};

const jokes = document.getElementById("jokes");
const randomButton = document.getElementById("randomButton");
randomButton.addEventListener("click", jokerandom);

if(showJoke === ""){
  const chiste = information.joke;
  showJoke(chiste);
}else{
  jokerandom()
}

function jokerandom() {
  fetch(api, config)
    .then(response => response.json())
    .then(information => {
      jokes.innerHTML = `<p>${information.joke}</p>`;
      console.log(jokes)
    })
    .catch (error =>{
      alert("Error:",error)
      console.log("Error;",error)
    })
}

function showJoke (chiste) {
  const caja = document.getElementById("caja");
  caja.innerText = chiste;
}

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(data => {
//     // Obtener el valor de una propiedad del primer elemento del arreglo
//     const firstPostTitle = data[1].title;
//     const properties = Object.keys(data);

//     // Mostrar el valor en el elemento div del HTML
//     outputDiv.textContent = `El título del primer post es: ${firstPostTitle}`;

//     console.log('Propiedades del objeto JSON:');
//     console.log(properties);
//   })
//   .catch(error => {
//     alert('Error:', error)
//     console.log('Error:', error);
//   });

// const config = {
//   headers: {
//     Accept: "application/json",
//   },
// };

// fetch("https://icanhazdadjoke.com/api", config)
//   .then((response) => response.json())
//   .then((joke) => {
//     const a = Object.keys(joke);

//     console.log(a);
//   })
//   .catch((error) => {
//     alert("Error:", error);
//     console.log("Error:", error);
//   });
