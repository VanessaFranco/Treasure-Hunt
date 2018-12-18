$(".butterfly").hide();
$(".door").hide();
$(".treasure").hide();

$("button").dblclick(function(){
    $("button").hide();
    $(".instructions").text("now click on the title");
});

$("h1").click(function(){
    $(".butterfly").show();
    $(".instructions").text("hover on butterfly");
});

$(".butterfly").mouseenter(function() {
    $("body").css("background-color","orange");
});

$(".map").click(function() {
    $(".map").hide();
    $(".butterfly").hide();
    $(".secret").hide();
    $(".door").slideDown();
    $(".instructions").text("double click on the door to knock");
});

$(".door").dblclick(function() {
    $(".door").hide();
    $(".treasure").fadeIn();
    $(".instructions").text("You Should Read This Book!");
});