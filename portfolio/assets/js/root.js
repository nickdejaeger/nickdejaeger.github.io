// Toggle 'scrolled' class on body when left top position
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll > 1) {
        $('body').addClass('scrolled');
    }
    else {
        $('body').removeClass('scrolled');
    }

    if (scroll <= 500) {
        $(".clearheader").removeClass("clearHeader").addClass("darkHeader");
    }
});