
'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Offcanvas Menu
    $(".canvas-open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".canvas-close, .offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    // Search model
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });
    /*------------------
        Hero Slider
    --------------------*/
   $(".hero-slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        mouseDrag: false
    });

    /*------------------------
		Testimonial Slider
    ----------------------- */
    $(".testimonial-slider").owlCarousel({
        items: 1,
        dots: false,
        autoplay: true,
        loop: true,
        smartSpeed: 1200,
        nav: true,
        navText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"]
    });
})(jQuery);

function chat() {
    const message = `Halo min saya mau tanya nih..`
    const whatsapp = `https://wa.me/6281212932426?text=${message}`
    open(whatsapp, "_blank")
  }

//   Data Booking Api
let dataBook = []
function submitBooking(){
    event.preventDefault();
let Name = document.getElementById("BookingName").value;
let Person = document.getElementById("BookingPerson").value;
let Phone = document.getElementById("BookingPhone").value;
let Email = document.getElementById("BookingEmail").value;
let Room = document.getElementById("Room").value;

dataBook.push({ Name: Name,
  Person: Person,
  Phone: Phone,
  Email: Email,
  Room: Room
})
localStorage.setItem("dataBooking", JSON.stringify(dataBook));
alert("Terima Kasih Telah Mendaftar");  
}


