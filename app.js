'use strict'

const main = document.querySelector('main')
const btnPesquisar = document.getElementById('btn-pesquisa')
const container = document.getElementById('container')

async function buscarImagens (raca) {
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const imagens = await response.json()
    console.log(imagens.message)
    return imagens.message
}

function exibirCachorro(cachorro){
    const img = document.createElement('img')

    img.src = cachorro

    container.appendChild(img)
    container.classList.add('container')
    main.appendChild(container)
    
}

btnPesquisar.addEventListener('click', async() => {
    const inputRaca = document.getElementById('input-pesquisa').value
    const imagens = await buscarImagens(inputRaca)
    container.textContent = ''
    imagens.forEach(img => exibirCachorro(img))

})