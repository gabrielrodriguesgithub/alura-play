import { conectaApi } from "./conectaApi.js";

const form = document.querySelector('[data-formulario]');

async function criarVideo(evento) {
    evento.preventDefault();

    const url = document.querySelector('[data-url]').value;
    const titulo = document.querySelector('[data-titulo]').value;
    const imagem = document.querySelector('[data-imagem]').value;
    const canal = document.querySelector('[data-canal]').value;
    const descricao = Math.floor(Math.random() * 10 + 1 ).toString();

    try {
        await conectaApi.criaVideo(titulo, descricao, url, imagem, canal)
        .then(window.location.href = "../pages/envio-concluido.html")
    } catch {
        console.log('er')     
    }
}

form.addEventListener('submit', evento => criarVideo(evento));

