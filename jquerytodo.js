$(document).ready(() => {

    $('.add-todo-text-input').keypress('enter', event => {
        if (event.which === 13) {
            let mylist = $('#addTodoTextInput').val();
            $('<li>'+mylist+'</li>').appendTo('.todos').on('click', event => {
                $(event.currentTarget).toggleClass('line-strike');
            });
            $('#addTodoTextInput').val('');
            };
     })

    $('li').on('click', event => {
        $(event.currentTarget).toggleClass('line-strike');
    })



})
