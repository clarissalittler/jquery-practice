
function clickHandler() {
    $(this).toggleClass("clicked");
}

$(document).ready( function () {
    var table = $("#ourtable");
    for(var row = 0; row < 3; row++) {
        var tr = $("<tr></tr>");
        for(var col = 0; col <3; col++) {
            var td = $("<td></td>");
            td.on("click", clickHandler);
            tr.append(td);
        }
        table.append(tr);
    }
});
