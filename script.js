const precoRefrigerante = 11.99
let quantidadeRefrigerante = 0
let totalRefrigerante = 0
const precoMacarrao = 6.99
let quantidadeMacarrao = 0
let totalMacarrao = 0
const precoErvilha = 6.99
let quantidadeoErvilha = 0
let totalErvilha = 0
const precoArroz = 22.99
let quantidadeArroz = 0
let totalArroz = 0
const precoFeijao = 11.89
let quantidadeFeijao = 0
let TotalFeijao = 0
const precoVinho = 70.00
let quantidadeVinho = 0
let totalVinho = 0
let total = 0
let meuTotal = 0

alert('Bem vindo ao Kenzie SuperMarket, vamos iniciar')

//---------------------------------------------------------------

alert(`O próximo item é \"Refrigerante\" UND: ${precoRefrigerante}`)

quantidadeRefrigerante = parseInt(prompt("Quantas Unidades ?"))

if (quantidadeRefrigerante <= 0) {

    alert('Quantitade inválida, digite novamente')

    quantidadeRefrigerante = parseInt(prompt("Quantas Unidades ?"))
}
totalRefrigerante = precoRefrigerante * quantidadeRefrigerante
total = precoRefrigerante * quantidadeRefrigerante

//---------------------------------------------------------------

alert(`O próximo item é \"Macarrão\" UND: R$ ${precoMacarrao}`)

quantidadeMacarrao = parseInt(prompt("Quantas Unidades ?"))

if (quantidadeMacarrao <= 0) {

    alert('Quantitade inválida, digite novamente')

    quantidadeMacarrao = parseInt(prompt("Quantas Unidades ?"))
}

totalMacarrao = precoMacarrao * quantidadeMacarrao
total += precoMacarrao * quantidadeMacarrao

//---------------------------------------------------------------

alert(`O próximo item é \"Ervilha\" UND: R$ ${precoErvilha}`)

quantidadeErvilha = parseInt(prompt("Quantas Unidades ?"))

if (quantidadeErvilha <= 0) {

    alert('Quantitade inválida, digite novamente')

    quantidadeErvilha = parseInt(prompt("Quantas Unidades ?"))
}
totalErvilha = precoErvilha * quantidadeErvilha
total += precoErvilha * quantidadeErvilha

//---------------------------------------------------------------

alert(`O próximo item é \"Arroz\" UND: R$ ${precoArroz}`)

quantidadeArroz = parseInt(prompt("Quantas Unidades ?"))

if (quantidadeArroz <= 0) {

    alert('Quantitade inválida, digite novamente')

    quantidadeArroz = parseInt(prompt("Quantas Unidades ?"))
}
totalArroz = precoArroz * quantidadeArroz
total += precoArroz * quantidadeArroz

//---------------------------------------------------------------

alert(`O próximo item é \"Feijão\" UND: R$ ${precoFeijao}`)

quantidadeFeijao = parseInt(prompt("Quantas Unidades ?"))

if (quantidadeFeijao <= 0) {

    alert('Quantitade inválida, digite novamente')

    quantidadeFeijao = parseInt(prompt("Quantas Unidades ?"))
}
TotalFeijao = precoFeijao * quantidadeFeijao
total += precoFeijao * quantidadeFeijao

//---------------------------------------------------------------

alert(`O próximo item é \"Vinho\" UND: R$ ${precoVinho}`)

quantidadeVinho = parseInt(prompt("Quantas Unidades ?"))

if (quantidadeVinho <= 0) {

    alert('Quantitade inválida, digite novamente')

    quantidadeVinho = parseInt(prompt("Quantas Unidades ?"))
}

    totalVinho = precoVinho * quantidadeVinho
    total += precoVinho * quantidadeVinho

if (total % 2 == 0) {

    alert(` O total foi: R$ ${total}`)
    alert(` O seu amigo pagará o Vinho. ${totalVinho}`)
    total -= precoVinho * quantidadeVinho
    alert(` Vocês dividirão o valor de: R$ ${total} que dará R$ ${total / 2}`)
    alert(` O seu amigo pagará o Vinho, que será ${totalVinho}`)
} else {
    alert(` O total foi: R$ ${total}`)
    meuTotal = total/2
    console.log(`${meuTotal}`)
    alert(` Você dividirá o valor do vinho R$ ${totalVinho}  com seu amigo, que dará ${totalVinho/2}`)
    alert(` Você pagará: R$ ${meuTotal}`)
    
}