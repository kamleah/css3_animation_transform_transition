$(document).ready(function () {
    console.log("doc ready");
    $('.button.first').on('mouseenter', function (event) {
        $(this).find('.btn-bg').css({ top: event.offsetY, left: event.offsetX });
    })
});