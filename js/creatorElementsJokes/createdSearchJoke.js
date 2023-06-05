export function createdElementsSearchJoke() {

    // Código para crear los elementos y el contenedor
    const container = document.createElement('div');
    container.classList.add('containerColor');

    const form = document.createElement('form');
    form.classList.add('inputFlex');

    const input = document.createElement('input');
    input.id = 'inputSearch';
    input.type = 'text';
    input.classList.add('inputStyle');

    const button = document.createElement('button');
    button.id = 'btnSearch';
    button.classList.add('style-btn');
    button.type = 'button';
    button.textContent = 'Search';

    form.appendChild(input);
    form.appendChild(button);

    const listJoke = document.createElement('div');
    listJoke.id = 'listJoke';

    container.appendChild(form);
    container.appendChild(listJoke);

    // Agregar el contenedor al final del body
    document.body.appendChild(container);

}