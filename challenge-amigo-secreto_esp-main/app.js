// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Variables globales
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    // Validaciones de entrada
    if (nombre === '') {
        mostrarMensaje('Por favor, ingresa un nombre válido.', 'error');
        return;
   
    }

    if (amigos.includes(nombre)) {
        mostrarMensaje('Este nombre ya ha sido agregado.', 'error');
        return;
    }

    // Agregar nombre a la lista
    amigos.push(nombre);
    actualizarListaAmigos();
    inputAmigo.value = '';
    mostrarMensaje('Amigo agregado con éxito.', 'success');
}

// Función para actualizar la lista visual
function actualizarListaAmigos() {
    listaAmigos.innerHTML = '';
    amigos.forEach(nombre => {
        const li = document.createElement('li');
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}

// Función para realizar el sorteo
function sortearAmigo() {
    if (amigos.length === 0) {
        mostrarMensaje('No hay nombres en la lista para sortear.', 'error');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSeleccionado}</strong> 🎉</li>`;
}

