async function listaVideos() {
    const conexao = await fetch('http://localhost:3000/videos')
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}

async function criaVideo(titulo, descricao, url, imagem, canal) {
    const conexao = fetch('http://localhost:3000/videos', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil vizualizações`,
            url: url,
            imagem: imagem,
            canal: canal
        })
    });
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida
}

async function buscaVideo(searchTerm) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${searchTerm}`) 
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
} 

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}

