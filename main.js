$(document).ready(function () {

    $('form').on('submit', function (e){
        e.preventDefault();
    })

    const btn = $('#btnNovaTarefa');
    const input = $('#tarefaInput');
    const lista = $('#lista-tarefas');

    //Adicionar tarefa
    $(btn).on('click', function() {
        let inputTarefa = $(input).val();
        
        if (inputTarefa.trim().length > 0 ) addTarefa(inputTarefa.trim());
        $(input).val('');
    });

    //Função para adicionar tarefa 
    function addTarefa(text) {
        $(lista).append('<li><span><input id="checkbox" type="checkbox"></span>' + text + '<span>x</span></li>');
        $(text).fadeIn(800);
    }

    //Marcar/desmarcar tarefa como concluída
    $(lista).on('click', 'input[type="checkbox"]', function (){
        $(this).closest('li').toggleClass('done'); 
    })

    //remover lista
    $(lista).on('click', 'span:nth-child(2)', function(e) {
        e.stopPropagation();
        $(this).parent().fadeOut(300, function (){
            $(this).remove();
        })
    })

})
