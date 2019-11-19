var date = document.getElementById("date").innerHTML = Date();
var enter = $(".enter");
var container = $(".container");
var calendar = $(".calendar");
var calDivs = $(".calDivs");

calendar.html("<h4>" + date + "<h4>" + calDivs.html());


enter.on("click", function(event) {
    event.preventDefault();
    container.attr("style", "padding-top: 20px");
    container.html(calendar.html());
})