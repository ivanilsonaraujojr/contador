btnEnviar.addEventListener('click', function(){
 notasInseridas = document.getElementById('notasValor').value
})


btnEnviar.addEventListener('click', dividirValor)

function dividirValor(){
//INSERIR TEXTO E RESETAR

//Notas
document.querySelector('p.nota100').innerText= 'Quantidades de nota(s) de 100 : '
document.querySelector('p.nota50').innerText= 'Quantidades de nota(s) de 50 : '
document.querySelector('p.nota20').innerText= 'Quantidades de nota(s) de 20 : '
document.querySelector('p.nota10').innerText= 'Quantidades de nota(s) de 10 : '
document.querySelector('p.nota5').innerText= 'Quantidades de nota(s) de 5 : '
document.querySelector('p.nota2').innerText= 'Quantidades de nota(s) de 2 : '
//Moedas
document.querySelector('p.moedas1').innerText= 'Quantidades de moeda(s) de 1: '
document.querySelector('p.moedas50').innerText= 'Quantidades de moeda(s) de 50 : '
document.querySelector('p.moedas25').innerText= 'Quantidades de moeda(s) de 25 : '
document.querySelector('p.moedas10').innerText= 'Quantidades de moeda(s) de 10 : '
document.querySelector('p.moedas05').innerText= 'Quantidades de moeda(s) de 5 : '
document.querySelector('p.moedas01').innerText= 'Quantidades de moeda(s) de 1 Centavo : '

document.getElementById('res').style.gridTemplateAreas='"textoProv"';
document.querySelector('h1.txtRes').style.display='block'
document.querySelector('div#notas').style.display='none'
document.querySelector('div#moedas').style.display='none'
//valores
var atual = Number(notasInseridas).toFixed(2);

var notas100 = parseInt(atual / 100);
atual -= (notas100 *100); // Lógica: var atual agora é var atual - numero inteiro de atual / 100 (atual -= parseInt(atual/100))

var notas50 = parseInt(atual / 50)
atual -= (notas50 *50); // Lógica: var atual agora é var atual - numero inteiro de atual / 50 (atual -= parseInt(atual/50))

var notas20 = parseInt(atual / 20)
atual -= (notas20 *20); // Lógica: var atual agora é var atual - numero inteiro de atual / 20 (atual -= parseInt(atual/20))

var notas10 = parseInt(atual / 10)
atual -= (notas10 *10); // Lógica: var atual agora é var atual - numero inteiro de atual / 10 (atual -= parseInt(atual/10))

var notas5 = parseInt(atual / 5)
atual -= (notas5 *5); // Lógica: var atual agora é var atual - numero inteiro de atual / 5 (atual -= parseInt(atual/5))

var notas2 = parseInt(atual / 2)
atual -= (notas2 *2); // Lógica: var atual agora é var atual - numero inteiro de atual / 2 (atual -= parseInt(atual/2))

var moedas1 = parseInt((atual / 1));
atual -= (moedas1 * 1); 

var moedas50 = parseInt((atual / 0.50));
atual -= (moedas50 * 0.50); 

var moedas25 = parseInt((atual / 0.25));
atual -= (moedas25 * 0.25); 

var moedas10 = parseInt((atual / 0.10));
atual -= (moedas10 * 0.10); 

var moedas05 = parseInt((atual / 0.05));
atual -= (moedas05 * 0.05); 

var moedas01 = parseInt((atual / 0.01));
atual -= (moedas01 * 0.01); 

//Mostrar divs
if(notasInseridas > 0){
//esconder paragrafo
document.querySelector('h1.txtRes').style.display='none'
document.querySelector('div#notas').style.display='block'
document.querySelector('div#moedas').style.display='block'
document.getElementById('res').style.gridTemplateAreas='"notas moedas"';
//INSERIR VALOR MOEDAS
document.querySelector('p.nota100').innerText += ' ' +notas100
document.querySelector('p.nota50').innerText += ' ' +notas50
document.querySelector('p.nota20').innerText += ' ' +notas20
document.querySelector('p.nota10').innerText += ' ' +notas10
document.querySelector('p.nota5').innerText += ' ' +notas5
document.querySelector('p.nota2').innerText += ' ' +notas2
//INSERIR VALOR NOTAS
document.querySelector('p.moedas1').innerText += ' ' +moedas1
document.querySelector('p.moedas50').innerText += ' ' +moedas50
document.querySelector('p.moedas25').innerText += ' ' +moedas25
document.querySelector('p.moedas10').innerText += ' ' +moedas10
document.querySelector('p.moedas05').innerText += ' ' +moedas05
document.querySelector('p.moedas01').innerText += ' ' +moedas01
} else{
    document.querySelector('h1.txtRes').innerHTML = "Digite um numero maior que 0"
}
}


