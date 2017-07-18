$(document).ready(function () {
    $('.collapse')
        .on('shown.bs.collapse', function () {
            $(this)
                .parent()
                .find("button[data-toggle=collapse]")
                .find('.material-icons')
                .html("keyboard_arrow_up")
        })
        .on('hidden.bs.collapse', function () {
            $(this)
                .parent()
                .find("button[data-toggle=collapse]")
                .find('.material-icons')
                .html("keyboard_arrow_down")
        });
});