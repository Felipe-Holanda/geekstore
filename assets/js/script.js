let listFigure = []
let listPainting = []

function createActionItem(imagemP, nomeP, valorP) {
    let item = {
        imagem: imagemP,
        nome: nomeP,
        valor: valorP
    }
    listFigure.push(item)
    return listFigure
}
createActionItem("./assets/img/actions/animewoman.jpg", 'Asuka Soryu', 'R$ 100,00')
createActionItem("./assets/img/actions/dragonballpersonagem.jpg", "Goku SSJ2 Freeza Saga", "R$ 100,00")
createActionItem("./assets/img/actions/starwarspersonagem.jpg", "Grogu Mando's Pupile", "R$ 100,00")

for (let i = 0; i < 7; i++) {
    createActionItem("./assets/img/semimagem.png", 'Produto não encontrado', 'R$ 0,00')
}


function createPainting(imagemP, nomeP, valorP) {
    let item = {
        imagem: imagemP,
        nome: nomeP,
        valor: valorP
    }
    listPainting.push(item)
    return listPainting
}

createPainting("./assets/img/painting/clock.jpg", "SmartWatch S34", "R$ 189,90")
createPainting("./assets/img/painting/gamepad.jpg", "Controle Dualshock4 PlayStation", "R$ 339,90")
createPainting("./assets/img/painting/personagem.jpg", "Quadro C-3PO Star Wars Legítimo", "R$ 250,00")


for (let i = 0; i < 7; i++) {
    createPainting("./assets/img/semimagem.png", 'Produto não encontrado', 'R$ 0,00')
}

let secaoFigures = document.getElementsByClassName('segunda_secao')[0]
let secaoPainting = document.getElementsByClassName('primeira_secao')[0]

function listarItem(lista, selecao) {
    for (let i = 0; i < lista.length; i++) {
        criarItem(lista[i], selecao)
    }
}


function criarItem(obj, seletor) {
    let elementoLista = document.createElement('li')
    let imagem = document.createElement('img')
    let nome = document.createElement('h3')
    let valor = document.createElement('p')
    elementoLista.className = 'produto'
    imagem.className = 'imagem_produto'
    imagem.src = obj.imagem
    nome.innerHTML = obj.nome
    valor.className = 'valor_produto'
    valor.innerHTML = obj.valor
    elementoLista.appendChild(imagem)
    elementoLista.appendChild(nome)
    elementoLista.appendChild(valor)
    if (seletor.toLowerCase() == 'painting'.toLowerCase()) {
        secaoPainting.appendChild(elementoLista)
    } if (seletor.toLowerCase() == 'figure'.toLowerCase()) {
        secaoFigures.appendChild(elementoLista)
    }
}

listarItem(listPainting, 'painting')
listarItem(listFigure, 'figure')