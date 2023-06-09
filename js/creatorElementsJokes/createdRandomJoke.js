export function createdElementsRandomJoke() {

 // Crear el contenedor principal con la clase "containerColor"
const container = document.createElement("div");
container.className = "containerColor";

const jokesDiv = document.createElement("div");
jokesDiv.id = "jokes";

const randomButton = document.createElement("button");
randomButton.id = "randomButton";
randomButton.className = "style-btn";
randomButton.textContent = "Get another joke!";

container.appendChild(jokesDiv);
container.appendChild(randomButton);

// Agregar el contenedor principal al documento
document.body.appendChild(container);
}
