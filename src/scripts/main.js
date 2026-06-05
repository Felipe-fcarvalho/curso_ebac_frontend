const btn = document.querySelector('#btn');
const res = document.querySelector('#resultado')

btn.addEventListener('click', function(){
    iniciar();
})

function iniciar() {
    const produto = prompt('Qual é o produto que você está comprando?');
    
    if(produto === '') {
        alert('Escolha um produto');
        return
    }

    const valor = Number(prompt(`Qual é o preço do ${produto}?`));

    if(Number.isNaN(valor)) {
        alert('Informe o valor do produto');
        return
    } else if (valor < 0) {
    alert('O valor do produto não pode ser negativo.');
    return;
    }

    const desconto = (10 / 100) * valor;

    res.innerHTML = `
    <h2>Calculando desconto de 10% para ${produto}</h2>
    <p>O preço original era de R$${valor}.</p>
    <p>Você acaba de receber R$${desconto} de desconto (-10%).</p>
    <p>No fim, você vai pagar R$${valor - desconto} no produto ${produto}.</p>
    `
}