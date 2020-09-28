$(document).ready(() => {

    $('.add-todo-text-input').keypress('enter', event => {
        if (event.which === 13) {
            let mylist = $('#addTodoTextInput').val();
            $('<li>'+mylist+'</li>').appendTo('.todos').on('click', event => {
                $(event.currentTarget).toggleClass('line-strike');
            });
            $('#addTodoTextInput').val('');
        }
        
    })

    $('#trash').hide();

    $('#edit').on('click', () => {
        $('#trash').toggle();
    });
    
    //if (currentTarget.classList.contains('line-strike')) {
        //$('#trash').on('click', event => {
            //$(event.CurrentTarget).hide();
       // })
    //};

    $('li').on('click', event => {
        $(event.currentTarget).toggleClass('line-strike');
    })

    $('#trash').on('click', () => {
        $('.line-strike').hide();
    })
    

})
