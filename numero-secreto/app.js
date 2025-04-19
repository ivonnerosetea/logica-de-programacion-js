// let titulo = document.querySelector('H1');
// titulo.innerHTML = 'Juego del número secreto';

// let parrafo = document.querySelector('P');
// parrafo.innerHTML = 'Indica un número del 1 al 10';

// function intentoDeUsuario() {
//     alert('Click desde el botón');
// }

// Aquí lo que hicimos es reutilizar código y hacerlo más corto y eficiente, 
// si te das cuenta la misma función sirve para los dos botones.
let numeroSecreto = 0;
let intentos = 1;
let numeroDeSorteos = [];
let numeroMaximo = 10;


// Aquí estamos cambiando o agregando el texto de los H1 y P del HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Aquí estamos agarrando el id 'valorUsuario' del input para verificar 
// el intento al momento de dar click 'verificarIntento' en el botón intentar,
// y validamos con los console.log cada valor y lo comparamos para ver si es true o false. 
function verificarIntento() { // Onclick del botón
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); // Input
    
    // Aquí estamos reutilizando la función asignarTextoElemento y validando.
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `¡Bien, acertaste el número en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'El número es menor');
        } else {
            // El usuario no acertó
            asignarTextoElemento('p', 'El número es mayor');
        }
        intentos++;
        limpiarCampo();
    }
    return;
}

function limpiarCampo() {
    document.querySelector('#valorUsuario').value = '';
}


// Génera el número random
function generaNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

// Si ya se sortearon todos los números
if (numeroDeSorteos.length == numeroMaximo) {
    asignarTextoElemento('p', 'Ya se sortearon todos los números posibles')
} else {
    // Si el número generádo esta incluido en la lista
    if (numeroDeSorteos.includes(numeroGenerado)) {
        return generaNumeroSecreto();
    } else {
        numeroDeSorteos.push(numeroGenerado);
        return numeroGenerado;
    }
  }
}

// Condiciones iniciales
function mensajesIniciales() {
    asignarTextoElemento('H1', 'Juego del número secreto')
    asignarTextoElemento('P', `Indica un número del 1 al ${numeroMaximo}`)
    numeroSecreto = generaNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // Limpiar caja
    limpiarCampo();
    // Indicar mensaje de intervalo de números
    // Generar en número aleatorio 
    // Inicializar en número de intentos
    mensajesIniciales();
    // Inicializar en número de intentos
    // Deshabilitar botón de Nuevo Juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

mensajesIniciales();
