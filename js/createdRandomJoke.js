export function createdElementsRandomJoke() {

 // Crear el contenedor principal con la clase "containerColor"
const container = document.createElement("div");
container.className = "containerColor";

// Crear el div con el ID "jokes"
const jokesDiv = document.createElement("div");
jokesDiv.id = "jokes";

// Crear el botón para obtener otro chiste
const randomButton = document.createElement("button");
randomButton.id = "randomButton";
randomButton.className = "style-btn";
randomButton.textContent = "Get another joke!";

// Agregar el div y el botón al contenedor principal
container.appendChild(jokesDiv);
container.appendChild(randomButton);

// Agregar el contenedor principal al documento
document.body.appendChild(container);
}
