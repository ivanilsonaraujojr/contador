//constantes DOM
const caixaValor = document.querySelector('.contarnotas__valor');
const botaoValor = document.querySelector('.contarnotas__botao');
const divResultado = document.querySelector('.contarnotas__resultado');

botaoValor.addEventListener("click", function(){ //Chamar função quando clickar no botão
    dividirCedulas(Number(caixaValor.value))
})


function dividirCedulas(notasInseridas){ //Função calcular divisão
    const cedulas = [100,50,20,10,5,2]
    const moedas = [1,0.50,0.25,0.10,0.05]
    let divisoes = 0
    let totalNotas = []
    let totalMoedas = []
    if(notasInseridas == '' || notasInseridas < 0){
        divResultado.innerHTML = (`<strong style="color:red;font-size:25px">ERRO: Digite um numero válido</strong>`)
    }else{
        for(c in cedulas){ //Divisao Cedulas
        if(notasInseridas != 0){
        divisoes = Math.floor(notasInseridas / cedulas[c])
        if(divisoes > 0){
            Math.floor(notasInseridas %= cedulas[c])
            let qtdCedulas = (`${divisoes} nota(s) de R$ ${cedulas[c]}`)
            totalNotas.push(qtdCedulas)
        }
    }
}
        for(let m in moedas){ //Divisao Moedas
        if(notasInseridas != 0){
        divisoes = Math.floor(notasInseridas / moedas[m])
        if(divisoes > 0){
            notasInseridas %= moedas[m]
            notasInseridas = notasInseridas.toFixed(2)
            let qtdMoedas = (`${divisoes} moedas(s) de R$ ${moedas[m]}`)
            totalMoedas.push(qtdMoedas)
        }
    }
}
    let resultado = `${totalNotas.join('<br>')}<br>${totalMoedas.join('<br>')}`
     divResultado.innerHTML = resultado
}
}