/* CODE GOES HERE */

$(window).on("load", start);

function start() {
    // alert("Hey, I am alive!");
    // $("body").css("background-color", "pink");

    $("#header").load("header.html");
    $("#menu").load("menu.html");
    $("#content").load("about.html");
}

$(document).on("click", "#menu a", navigate);

function navigate(e) {
    e.preventDefault();
    // alert("Hello");
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    let url = $(this).attr("href");
    // alert(url);
    $("#content").load(url);
}


