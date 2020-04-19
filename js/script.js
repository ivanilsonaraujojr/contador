//constantes DOM
const valorInserido = document.querySelector('.contarnotas__valor');
const botaoValor = document.querySelector('.contarnotas__botao');
const res = document.querySelector('.contarnotas__resultado');

valorInserido.addEventListener('click', function(){
    valorInserido.value = ''
    res.innerHTML='Insira um valor para exibir a divisão em notas'
})

botaoValor.addEventListener('click', function(){
    let valor = Math.floor(valorInserido.value)
    if(valor == '' || valor <= 0){
        res.innerHTML='<strong style="color:red;">Insira um valor maior que 0</strong>'
    }else{
    let entrada = valor

    let contador100 = 0;
    let contador50 = 0;
    let contador20 = 0;
    let contador10 = 0;
    let contador5 = 0;
    let contador2 = 0;


    if(entrada != 0) {
    for(;entrada >= 100;) {
        contador100++;
        entrada -= 100;
    }
    for(;entrada >= 50;) {
        contador50++;
        entrada -= 50;
    }

    for(;entrada >= 20;) {
        contador20++;
        entrada -= 20;
    }

    for(;entrada >= 10;) {
        contador10++;
        entrada -= 10;
    }

    for(;entrada >= 5;) {
        contador5++;
        entrada -= 5;
    }

    for(;entrada >= 2;) {
        contador2++;
        entrada -= 2;
    }

    }
    res.innerHTML=`Valor inserido: R$ ${valor}<br>
                    A quantidade de nota(s) de 100 é: ${contador100}<br>
                    A quantidade de notas(s) de 50 é: ${contador50}<br>
                    A quantidade de nota(s) de 20 é: ${contador20}<br>
                    A quantidade de nota(s) de 10 é: ${contador10}<br>
                    A quantidade de nota(s) de 5 é: ${contador5}<br>
                    A quantidade de nota(s) de 2 é: ${contador2}<br>`
     }
})
