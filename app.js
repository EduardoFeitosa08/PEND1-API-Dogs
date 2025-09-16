'use strict'

const main = document.querySelector('main')
const btnPesquisar = document.getElementById('btn-pesquisa')
const container = document.getElementById('container')
const inputRaca = document.getElementById('input-pesquisa')

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

    img.addEventListener('click', function(){
        window.open(cachorro)
    })
    
}

inputRaca.addEventListener('keydown', async(evento) => {
    if(evento.key === 'Enter' || evento.keyCode === 13){
        const imagens = await buscarImagens(inputRaca.value)
        container.textContent = ''
        imagens.forEach(img => exibirCachorro(img))
    }
})

btnPesquisar.addEventListener('click', async() => {
    const imagens = await buscarImagens(inputRaca.value)
    container.textContent = ''
    imagens.forEach(img => exibirCachorro(img))

})