let amigos = [];

const nombreAmigoInput = document.getElementById("amigo");
const listaAmigosElement = document.getElementById("listaAmigos");
const resultadoElemento = document.getElementById("resultado");



function agregarAmigo() {
    const nombre = nombreAmigoInput.value.trim();

    if (nombre === "") {
        alert("Por favor ingrese un nombre  válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("¡Ese nombre ya está en la lista!");
        nombreAmigoInput.value = "";
        return;
    }

    amigos.push(nombre);
    nombreAmigoInput.value = "";
    mostrarAmigos();
}

function mostrarAmigos() {
    listaAmigosElement.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigos[i];
        listaAmigosElement.appendChild(nuevoElemento);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("¡Necesitas al menos dos amigos para sortear!");
        resultadoElemento.innerHTML = "";
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    resultadoElemento.innerHTML = `¡El amigo sorteado es ${amigoSorteado}!`;
}

