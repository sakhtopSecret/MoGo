$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = ($(window).scrollTop());
        

    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {

        if(scrollOffset >= (introH -68)) {
            header.addClass("fixed");
            console.log(scrollOffset);
            console.log(introH);
        } else {
            header.removeClass("fixed");
        }

    }

    /* Smooth scroll */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");
        $("#nav").removeClass("active");
        $("#nav_toggle").removeClass("active");
        

        $("html, body").animate ({
            scrollTop: (blockOffset -68)
        }, 500)

    });

    /* Menu nav togle */

    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
        
    });

    /* Collapse */

    $("[data-collapse").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        
        $this.toggleClass("active");
        
    });

    /* Slider */

    $('.data-slider').slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });


});