$('.startPluginbtn').click(function(){
    $("#preloader-start").delay(100).fadeOut("10000");
});

$("#registered").fadeOut("0");
$('.submit').click(function(){
    $("#registered").fadeIn("0");
    $("#registered").delay(3000).fadeOut("0");
});