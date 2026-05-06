const form = document.getElementById('form-requisicao');
const categoriaA = document.getElementById('categoriaA');
const categoriaB = document.getElementById('categoriaB');
const mensagemErro = document.querySelector('.error-message');
const mensagemSucesso = document.querySelector('.success-message');

function validaRequisicao(valorA, valorB) {
    return valorB > valorA;
}

function mostrarErro(texto) {
    mensagemErro.innerHTML = texto;
    mensagemErro.style.display = 'block';
    mensagemSucesso.style.display = 'none';
    categoriaB.classList.add('error');
}

function mostrarSucesso(texto) {
    mensagemSucesso.innerHTML = texto;
    mensagemSucesso.style.display = 'block';
    mensagemErro.style.display = 'none';
    categoriaB.classList.remove('error');
}

function esconderMensagens() {
    mensagemErro.style.display = 'none';
    mensagemSucesso.style.display = 'none';
    categoriaB.classList.remove('error');
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const valorA = categoriaA.valueAsNumber;
    const valorB = categoriaB.valueAsNumber;

    if (validaRequisicao(valorA, valorB)) {
        mostrarSucesso(
            `Sua requisição foi enviada com sucesso, <b>${valorA}</b> de categoria A e <b>${valorB}</b> de categoria B.`
        );

        categoriaA.value = '';
        categoriaB.value = '';
    } else {
        mostrarErro('OBS: O número de peças da categoria B deve ser maior que o número de peças da categoria A.');
    }
});

categoriaA.addEventListener('focus', esconderMensagens);
categoriaB.addEventListener('focus', esconderMensagens);

categoriaB.addEventListener('input', function () {
    const valorA = categoriaA.valueAsNumber;
    const valorB = categoriaB.valueAsNumber;

    if (categoriaA.value === '' || categoriaB.value === '') {
        esconderMensagens();
        return;
    }

    if (validaRequisicao(valorA, valorB)) {
        mensagemErro.style.display = 'none';
        categoriaB.classList.remove('error');
    } else {
        mostrarErro('OBS: O número de peças da categoria B deve ser maior que o número de peças da categoria A.');
    }
});
