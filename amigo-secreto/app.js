// Lista para almacenar los nombres de los amigos
const amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim(); // Elimina espacios en blanco al inicio y al final

  if (nombre === "") {
    mostrarMensaje("Por favor, escribe un nombre válido.");
    return;
  }

  amigos.push(nombre); // Agrega el nombre a la lista
  actualizarLista(); // Actualiza la lista en pantalla
  input.value = ""; // Limpia el campo de entrada
}

// Función para actualizar la lista visual en el HTML
function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpia la lista antes de actualizarla

  amigos.forEach((amigo, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = amigo;
    listItem.className = "name-item";
    lista.appendChild(listItem);
  });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
  if (amigos.length === 0) {
    mostrarMensaje("La lista está vacía. Por favor, añade al menos un nombre.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li class="result-item">¡El amigo secreto es: ${amigoSorteado}!</li>`;
}

// Mensaje de alerta por si algún campo no se cumple
function mostrarMensaje(mensaje) {
    const mensajeDiv = document.getElementById("mensaje");
    mensajeDiv.textContent = mensaje; // Coloca el texto del mensaje
    mensajeDiv.style.display = "block"; // Asegúrate de que sea visible
  
    // Oculta el mensaje automáticamente después de 3 segundos
    setTimeout(() => {
      mensajeDiv.style.display = "none";
    }, 3000);
  }
  