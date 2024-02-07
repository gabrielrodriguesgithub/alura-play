import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {
    evento.preventDefault()

    
    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value
    const busca = await conectaApi.buscaVideo(dadosDePesquisa)
    
    const lista = document.querySelector('[data-lista]')

    while(lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }
    
    busca.forEach(video => lista.appendChild
        (constroiCard(video.titulo, video.descricao, video.url, video.imagem, video.canal)));

    if(busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem videos com esse termo</h2>`
    }     
}

const botaoDePesquisa = document.querySelector('[data-botao-pesquisa]')

botaoDePesquisa.addEventListener('click', evento => buscarVideo(evento))