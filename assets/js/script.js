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
function init(){
    let map = new ymaps.Map('map', {
        center: [59.92713006420545,30.374860499999965],
        zoom: 17,
    })
    let placemark = new ymaps.Placemark([59.92713006420545,30.374860499999965], {}, {

    })

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опциональн

    map.geoObjects.add(placemark);
}

ymaps.ready(init)