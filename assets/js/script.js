$(document).ready(function() {
    $('.nav-panel__burger').click(function() {
        $('.nav-panel__link').toggleClass('mobile_hide');
        $('.menu').toggleClass('menu_active');
    });
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        let target = $(this.hash);
        $('html, body').stop().animate({
            'scrollTop': target.offset().top
        }, 1000);
    });
});
function initMap() {
    const location = {
        lat: 59.92713006420545,
        lng: 30.374860499999965
    };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: location,
        mapId: 'MAP_ID',
        disableDefaultUI: true,
        zoomControl: false,
        scaleControl: true,
    });
    const contentString = '<div class="map__content">' + '<h1 class="map__title title">Movee</h1>' + '<div class="map__info">' + '<p class="map__item basic__18px">Москва, Волгоградский пр-т, 38</p>' + '<p class="map__item basic__18px">8 (800)-080-12-13</p>' + '<p class="map__item mail basic__18px">' + '<ins>' + 'hello@movee.ru' + '</ins>' + '</p>' + '</div>' + '<div class="map__social-network">' + '<a href="" class="map__social social" aria-label="youtube"></a>' + '<a href="" class="map__social social" aria-label="vkontakte"></a>' + '<a href="" class="map__social social" aria-label="facebook"></a>' + '<a href="" class="map__social social" aria-label="instagram"></a>' + '</div>' + '</div>';
    const marker = new google.maps.Marker({
        position: location,
        map,
        title: "test",
    });
};

// $(function () {
//     var element = $(".services"), display;
//     $(window).scroll(function () {
//         display = $(this).scrollTop() >= $('.services').offset().top;
//         if(display){
//             element.show();
//             console.log('test')
//         }else{
//             element.hide();
//         }
//     });
// });
// $(window).scroll(function() {
//   if ($(this).scrollTop()==$('.services').offset().top) {
//     // длительность анимации - 'slow'
//     // тип анимации -  'linear'
//     $('.services').fadeIn('slow','linear');
//   }
//   else {
//     // длительность анимации - 'fast'
//     // тип анимации -  'swing'
//     $('.services').fadeOut('fast','swing');
//   }
// });

$(window).scroll(function () {
    let servicesHeight = $('.animation').height();
    let servicesOffset = $('.animation').offset().top;
    let animStart = 4;
    let servicesPoint = window.innerHeight - servicesHeight / animStart;
    console.log(servicesHeight)
    console.log(servicesOffset)
    if (servicesHeight > window.innerHeight) {
        let servicesPoint = window.innerHeight - window.innerHeight / animStart;    
    }
    console.log($(window).innerHeight)
    if ($(this).scrollTop() >= 1151) {
        $('.services').removeClass('_hide');
        console.log(servicesPoint)
    }
    if ($(this).scrollTop() >= 1771) {
        $('.about-company').removeClass('_hide');
        console.log(servicesPoint)
    }
    if ($(this).scrollTop() >= 2371) {
        $('#map').removeClass('_hide');
        console.log(servicesPoint)
    }
    let windowCentre = window.innerHeight / 2 + window.scrollY;
    let scrollOffset = $('.animation').offset().top;
    console.log(windowCentre)
    console.log(scrollOffset)
})