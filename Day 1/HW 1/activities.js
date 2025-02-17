$(document).ready(function(){
    $("table td").each(function () {
        var cellText = $(this).text().trim();
        if (cellText === "Not Available") {
            $(this).addClass("not-selectable");
        } else {
            $(this).addClass("selectable");
        }
    });

    $(".selectable").css("cursor", "pointer");

    $(".selectable").click(function () {
        $(this).toggleClass("highlighted");
    });
})