$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    });

    $('form').on('submit', function(e) {
        e.preventDefault(e);
        let novaTarefa = $('#nome-tarefa').val();

        if (novaTarefa.trim() !== '') {
            $('ul').append(`<li>${novaTarefa}</li>`);
            $('#nome-tarefa').val('');
        }
    });

    $('ul').on('click', 'li', function() {
        $(this).css('text-decoration', 'line-through');
    });
});