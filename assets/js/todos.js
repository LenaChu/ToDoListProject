//Check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//Click on X to delete todo
$("ul").on("click", "span",function(event){
    //remove the parent that contains the span
    $(this).parent().fadeOut(500, function(){
        //the second this is the parent of the span, which is the li
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
        $(this).val("");

    }
})
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});