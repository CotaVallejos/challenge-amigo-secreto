// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".button-add").addEventListener("click", agregarAmigo);
    document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
    document.getElementById("amigo").addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            agregarAmigo();
        }
    });
});

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre válido.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let ganador = amigos[indice];
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
    let li = document.createElement("li");
    li.innerHTML = `<strong>El amigo secreto es: ${ganador}</strong>`;
    resultadoLista.appendChild(li);
}
