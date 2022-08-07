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

        if(scrollOffset >= (introH -69)) { /* Срабатывание шапки при перехоче через nav_active к секции about (-68 + (-1px)) */
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
            scrollTop: (blockOffset -68) /* Оставить отступ сверху, чтобы header не заезжал на заголовок */
        }, 500)

    });

    /* Menu nav togle */

    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
        
    });

    /* Collapse, Accordeon */

    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this);

        
        $this.toggleClass("active");
    });

    /* При клике на accordion__header срабатывает функция f_acc */

    $('#accordion .accordion__header').on('click', f_acc);

    /* Функция анимации Accordion */

    function f_acc(){
        //скрываем все кроме того, что должны открыть
          $('#accordion .accordion__content').not($(this).next()).slideUp(1000);
        // открываем или скрываем блок под заголовком, по которому кликнули
            $(this).next().slideToggle(500);
        }

    /* Slider */

    $('.data-slider').slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });


});