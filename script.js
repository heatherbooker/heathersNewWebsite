$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 100
        }, 900, 'swing', function() {
            window.location.hash = target - 100;
        });
    });

    $('#fizzbuzz').click(function() {
        $("#fizz").show();
    });
    $('#website').click(function() {
        $("#web").show();
    });
    $('#graph').click(function() {
        $("#hoursApp").show();
    });
    $('#clothing').click(function() {
        $("#clothes").show();
    });

});