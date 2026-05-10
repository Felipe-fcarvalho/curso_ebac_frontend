$(document).ready(function(){
    const listaTarefas = $('#lista-tarefas');

    $('form').on('submit', function(e){
        e.preventDefault();

        const novaTarefa = $('#tarefa-input').val().trim();

        if (novaTarefa === '') return;

        listaTarefas.append(`
            <li>
            <input type="checkbox">
            <span class="texto-tarefa">${novaTarefa}</span>
            <span class="excluir">Excluir</span>
            </li>
        `);
        
        $('#tarefa-input').val('');
        $('#tarefa-input').focus();
    });

    listaTarefas.on('change', 'input[type="checkbox"]', function (){
    $(this).siblings('.texto-tarefa').toggleClass('done'); 
    });

    listaTarefas.on('click', '.excluir', function(){
        $(this).closest('li').remove();
    });
});