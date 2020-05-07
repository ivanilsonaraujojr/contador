//constantes DOM
const caixaValor = document.querySelector('.contarnotas__valor');
const botaoValor = document.querySelector('.contarnotas__botao');
const divResultado = document.querySelector('.contarnotas__resultado');

// Chamar função para dividir cedulas quando clickar no botão
botaoValor.addEventListener("click", function(){
    dividirCedulas(caixaValor.value)
})

// função para dividir as cedulas
function dividirCedulas(notasInseridas){
    const cedulas = [100,50,20,10,5,2,1]
    let divisao = 0
    let resultado = []
    if(Math.floor(notasInseridas) > 0) {
        for(i in cedulas){
        divisao = Math.floor(notasInseridas / cedulas[i])
        if(divisao > 0){
            notasInseridas %= cedulas[i]
            let resultadoDivisao = (`${divisao} nota(s) de ${cedulas[i]} R$`)
            resultado.push(resultadoDivisao)
            divResultado.innerHTML = resultado.join("<br><br>")
        }
    }
}   else divResultado.innerHTML = (`<strong style="color:red;font-size:25px">ERRO: Digite um numero maior que 0</strong>`)
}
