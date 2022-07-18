$(function(){

$(".primero").css({"background-color": "red"})

$("#btn-hide").dblclick(function(){
    
    $("#segundo").hide();

});

$("#btn-show").click(function(){

    $("#segundo").show();

});

$(".primero").mouseenter(function(){

    $(".primero").fadeOut();

});

$("#segundo").mouseenter(function(){

    $(".primero").fadeIn();

});

$(".tercero").mouseenter(function(){

    $("#segundo").slideUp();

});

$(".tercero").mouseleave(function(){

    $("#segundo").slideDown();

});


$(".btn-text").click(function(){

    $("#segundo").prepend("hola <strong>programadores</strong>");
})

$(".btn-text").click(function(){

    $("#segundo").text("Hola");
})

$(".btn-text").click(function(){

    $(".tercero").html("hola <strong>programadores</strong>");
})

$(".btn-text").click(function(){

    $(".cuarto").text("hola <strong>programadores</strong>");
})

$(".btn-text").click(function(){

    $(".primero").after("<p> hola <strong>programadores</strong> </p>");
})








});