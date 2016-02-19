// script.js

$(function(){
 //TO DO LIST
    
    $('#todoList ul').sortable({
        items: "li:not('.listTitle, .addItem')",
        connectWith: "ul",
        dropOnEmpty: true,
        placeholder: "emptySpace"
    });
    $('input').keydown(function(e){
        if(e.keyCode == 13){
            var item = $(this).val();
            
            $(this).parent().parent().append('<li class="todo-item">' + '>' + item + '</li>');
            $(this).val('');
        }
    });
    $('#trash').droppable({
        drop: function(event, ui){
            ui.draggable.remove();
        }
    });
    
});



