// Seleciona os elementos do HTML
let inputAmigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let nome = inputAmigo.value.trim();
    if (nome) {
        amigos.push(nome);
        atualizarLista();
        inputAmigo.value = '';
    } else {
        alert('Seu amigo não tem nome?');
    }
}

// Função para atualizar a exibição da lista
function atualizarLista() {
    listaAmigos.innerHTML = '';
    amigos.forEach((nome, index) => {
        let item = document.createElement('li');
        item.textContent = `${index + 1}. ${nome}`;
        listaAmigos.appendChild(item);
    });
}

// Função para sortear um amigo da lista
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Você não tem amigos ;(');
        return;
    }
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceSorteado];

    // Exibe o nome sorteado no HTML
    resultado.innerHTML = `Amigo secreto sorteado: ${nomeSorteado}`;
}
