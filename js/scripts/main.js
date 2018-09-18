/*
 *  @author: Lucas Barretto e Silva
 *  @description: script to count number of chars input by the user
 */


$(document).ready(function () {
    var textarea = $("#textarea-input");

    textarea.keyup(function () {
        for (var counter = 0; counter < textarea.val().length; ++counter) {}

        if (textarea.val().length < 10) {
            $("#counter").text("00" + counter);
        } else if (textarea.val().length < 100 && textarea.val().length > 9) {
            $("#counter").text("0" + counter);
        } else {
            $("#counter").text(counter);
        }

    });
});