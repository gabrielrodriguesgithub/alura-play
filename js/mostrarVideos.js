import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector('[data-lista]');

export default function constroiCard( titulo, descricao, url, imagem, canal) {
    const video = document.createElement('li');
    video.className = 'videos__item';
    video.innerHTML = ` <iframe width="100%" height="72%" src="${url}"
            title="${titulo}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <div class="descricao-video">
            <img src="${imagem}" alt="logo canal alura">
            <h3>${titulo}</h3>
            <div class="paragrafo">
                <p>${canal}</p>
                <p>${descricao} </p>
            </div>
        </div>
        `
    return video;
}

async function listaVideo() {
   try {
    const listaApi = await conectaApi.listaVideos()
    listaApi.forEach(video => lista.appendChild
        (constroiCard(video.titulo, video.descricao, video.url, video.imagem, video.canal)));
    } catch {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possivel carregar a lista de videos ;(</h2> `
    }
}

listaVideo()
