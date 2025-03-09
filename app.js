//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomeAmigo = [];
let listaAmigos = document.querySelector("#listaAmigos");


function adicionarAmigo() {
    let amigo = document.querySelector("#amigo").value;

    if (amigo === '') {
        alert('Digite um nome para adicionar a lista!');
        return;
    }
    
    listaAmigos.innerHTML += `<li>${amigo}</li>`;
    nomeAmigo.push(amigo);
    resultado.innerHTML = '';
    limparCampo();
}

function limparCampo() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo() {
    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = `O amigo sorteado foi: ${nomeAmigo[Math.floor(Math.random() * nomeAmigo.length)]}`;
    listaAmigos.innerHTML = '';
    nomeAmigo = [];
}