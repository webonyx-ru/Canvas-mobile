$(document).ready(function() {
    $(document).on("click", '.burger', function(e) {
        $('.sliding-panel').addClass('active');
        $('.burger').addClass('active');
        $('body').addClass('ovh');
        e.preventDefault();
    });


    $(document).on("click", '.sliding-panel__close', function(e) {
        $('.sliding-panel').removeClass('active');
        $('.burger').removeClass('active');
        $('body').removeClass('ovh');
        e.preventDefault();
    });


    $(document).on("click", '.advantage', function(e) {
        var advantage = $(this).closest(".adv-wrapper");
        adv = $(this).closest(".advantage");
        advantage.find(".dropdown-item").stop().slideToggle(400);
        advantage.toggleClass("active");
        adv.toggleClass("active");
    });


    $(document).on("click", '.other-photos-icon', function(e) {
        var slider = $(this).closest(".slider-wrapper"),
            active_elem = slider.find(".slider-img.active");


        if (slider.find(".slider-img").last().hasClass("active")) {
            slider.find(".slider-img").removeClass("active");
            slider.find(".slider-img:eq(0)").addClass("active");
        } else {
            slider.find(".slider-img").removeClass("active");
            active_elem.next().addClass("active");
        }

    });


    $(document).on("click", '[data-tab]', function(e) {
        var this_tab = $(this).data("tab");

        if ($(this).hasClass("all")) {
            $("[data-tab]").removeClass("active");
            $(this).addClass("active");

            $("[data-tab-content]").addClass("active");
        } else {
            $("[data-tab]").removeClass("active");
            $(this).addClass("active");

            $("[data-tab-content]").removeClass("active");
            $("[data-tab-content=" + this_tab + "]").addClass("active");
        }

        e.preventDefault();
    });


    $(document).on("click", 'btn-cancel', function(e) {
        $(".burger, .sliding-panel").removeClass("active");
        e.preventDefault();
    });

    
});


var myMap;


if ($("#map").length > 0 ) {
    ymaps.ready(init);
}


function init () {
    myMap = new ymaps.Map('map', {
        // Санкт-Петербург
        center: [55.7581015, 37.624130899999955],
        zoom: 17
    }, {
        searchControlProvider: 'yandex#search'
    });

    myMap.behaviors.disable('scrollZoom');

    var placemark = new ymaps.Placemark([55.758086161422895,37.624489759503625]);

    myMap.geoObjects
    .add(placemark);
}


