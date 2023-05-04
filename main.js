$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('header').addClass('headershadow');
    } else {
        $('header').removeClass('headershadow');
    }
})
$(document).ready(function() {
    $('.bar-button').on('click', function() {
        if ($('.navigasi').is(':visible')) {
            $('.navigasi').hide();
        } else {
            $('.navigasi').show();
        }
    });
    $('.item-list').on('click', function() {
        if ($('.navigasi').is(':visible')) {
            $('.navigasi').hide();
        } else {
            $('.navigasi').show();
        }
    });
});