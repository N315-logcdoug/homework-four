function init() {
    console.log("test");
    $("#submit").on("click", function (e) {
        e.preventDefault();

        let fn = $("#fName").val();
        let ln = $("#lName").val();

        if (fn == "") {
            alert("You must enter your first name");
        } else if (ln == "") {
            alert("You must enter your last name");
        } else {
            alert("Info successfully entered");
        }
    });
}

$(document).ready(function () {
    init();
});
