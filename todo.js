
$(document).ready(function () {
    $("#adder").on("click", function () {
        var el = $("<li>You added: " + $("#todoinput").val() + "</li>");
        $("#todool").append(el);
        $("#todoinput").val("");
    });
});
