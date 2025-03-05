let totalAmigos = [];

function agregarAmigo() {
    let friend = document.getElementById('amigo').value;
    totalAmigos.push(friend);
    console.log(totalAmigos);
    if (friend == '') {
        invalido()
    }
    limpiarCaja();
    asignarTextoElemento1('#listaAmigos',totalAmigos);
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function asignarTextoElemento1(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto.join('<br>');
    return;
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function sortearAmigo() {
    if (totalAmigos != '') {
        let generaDatoRandom = Math.floor(Math.random() * totalAmigos.length);
        let datoRandom = totalAmigos[generaDatoRandom];
        console.log(datoRandom)
        asignarTextoElemento('#resultado', `El dato sorteado es: ${datoRandom}`);
    } else {
        invalido()
    }
}

function invalido() {
    alert("Por favor inserte un nombre");
}
