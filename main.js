const form = document.getElementById('form-requisicao');
const numeroB = document.getElementById('categoriaB');
let formEValido = false;

function validaRequisicao(numeroA, numeroB) {
    return numeroB > numeroA
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroA = document.getElementById('categoriaA');
    const mensagemSucesso = `Sua requisição foi enviada com sucesso, <b>${numeroA.value}</b> de categoria (A) e <b>${numeroB.value}</b> de categoria (B)`;

    formEValido = validaRequisicao(Number(numeroA.value), Number(numeroB.value))
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numeroA.value = '';
        numeroB.value = '';
    } else {  
        numeroB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    }
})



numeroB.addEventListener('keyup', function(e) {
    const numeroA = document.getElementById('categoriaA');
    formEValido = validaRequisicao(Number(numeroA.value), Number(e.target.value));

    if (!formEValido) {
        numeroB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        numeroB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
})

function escondeMensagemSucesso() {
    containerMensagemSucesso.style.display = 'none';
}

const containerMensagemSucesso = document.querySelector('.success-message');

document.getElementById('categoriaA').addEventListener('focus', escondeMensagemSucesso);
document.getElementById('categoriaB').addEventListener('focus', escondeMensagemSucesso);