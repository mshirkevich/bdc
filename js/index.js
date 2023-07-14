ymaps.ready(init);

    function init() {
		var myMap = new ymaps.Map("map", {
            center: [53.93,27.49],
            zoom: 12
        
		}, {
            searchControlProvider: 'yandex#search'
        });
		
        myMap.behaviors.disable("scrollZoom");

        var myGeocoder = ymaps.geocode("Беларусь, Минск, улица Руссиянова, 4");
        myGeocoder.then(function (res) {
            var coordinates = res.geoObjects.get(0).geometry.getCoordinates();
			var placeMarket = new ymaps.Placemark(coordinates, {/*
					balloonContentHeader: '<div class="title">Розничное представительство "Уручье"</div>',
					balloonContentBody: '<div class="address">г. Минск, улица Руссиянова, 4,<br> первый этаж магазина "Континент" <a href="#">(показать на карте)</a></div><div class="links"><span>Телефоны:</span><ul><li><a href="tel:+375172680101">+375 (17) 268-01-01</a></li><li><a href="tel:+375172663093">+375 (17) 266-30-93</a></li><li><a href="tel:+375291950603">+375 (29) 195-06-03</a></li><li><a href="tel:+375297672211">+375 (29) 767-22-11</a></li></ul><span>Телефон/факс:</span><a href="tel:80172680101">8 (017) 268-01-01</a></div>'
                /*balloonContent: 'г. Минск, Восток-2, улица Славинского, 1/2, офис 114'*/
                },
				{
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#image',
					// Своё изображение иконки метки.
					iconImageHref: 'images/mapicon.jpg',
					// Размеры метки.
					iconImageSize: [40, 40],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-5, -38]
				}
				);
            myMap.geoObjects
                .add(placeMarket);	
			placeMarket.events.add('click', function () {
                $('.map-point-info').hide();
				$('#office2').show("fade", 500);
            });
        });
		
		var myGeocoder = ymaps.geocode("Беларусь, Минск, улица Шаранговича, 25");
        myGeocoder.then(function (res) {
            var coordinates = res.geoObjects.get(0).geometry.getCoordinates();
			 var placeMarket = new ymaps.Placemark(coordinates, {/*
					balloonContentHeader: '<div class="title">Розничное представительство "Сухарево"</div>',
					balloonContentBody: '<div class="address">г. Минск, улица Шаранговича, 25,<br> ТЦ "Магнит", пав. 223 <a href="#">(показать на карте)</a></div><div class="links"><span>Телефоны:</span><ul><li><a href="tel:+375172680101">+375 (17) 268-01-01</a></li><li><a href="tel:+375172663093">+375 (17) 266-30-93</a></li><li><a href="tel:+375291950603">+375 (29) 195-06-03</a></li><li><a href="tel:+375297672211">+375 (29) 767-22-11</a></li></ul><span>Телефон/факс:</span><a href="tel:80172680101">8 (017) 268-01-01</a></div>'
               /*balloonContent: 'г. Минск, Восток-2, улица Славинского, 1/2, офис 114'*/
                },
				{
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#image',
					// Своё изображение иконки метки.
					iconImageHref: 'images/mapicon.jpg',
					// Размеры метки.
					iconImageSize: [40, 40],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-5, -38]
				}
				);
            myMap.geoObjects
                .add(placeMarket);	
			placeMarket.events.add('click', function () {
                $('.map-point-info').hide();
				$('#office3').show("fade", 500);
            });
        });
		
		var myGeocoder = ymaps.geocode("Беларусь, Минск, улица Бурдейного, 6");
        myGeocoder.then(function (res) {
            var coordinates = res.geoObjects.get(0).geometry.getCoordinates();
			  var placeMarket = new ymaps.Placemark(coordinates, {/*
					balloonContentHeader: '<div class="title">Розничное представительство "Западный рынок"</div>',
					balloonContentBody: '<div class="address">г. Минск, улица Бурдейного, 6,<br> ТЦ "Западный рынок", второй этаж, пав.59 <a href="#">(показать на карте)</a></div><div class="links"><span>Телефоны:</span><ul><li><a href="tel:+375172680101">+375 (17) 268-01-01</a></li><li><a href="tel:+375172663093">+375 (17) 266-30-93</a></li><li><a href="tel:+375291950603">+375 (29) 195-06-03</a></li><li><a href="tel:+375297672211">+375 (29) 767-22-11</a></li></ul><span>Телефон/факс:</span><a href="tel:80172680101">8 (017) 268-01-01</a></div>'
					/*balloonContent: 'г. Минск, Восток-2, улица Славинского, 1/2, офис 114'*/
                },
				{
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#image',
					// Своё изображение иконки метки.
					iconImageHref: 'images/mapicon.jpg',
					// Размеры метки.
					iconImageSize: [40, 40],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-5, -38]
				}
				);
            myMap.geoObjects
                .add(placeMarket);
			placeMarket.events.add('click', function () {
                $('.map-point-info').hide();
				$('#office4').show("fade", 500);
            });
        });
		
		var myGeocoder = ymaps.geocode("Беларусь, Минск, Восток-2, улица Славинского, 1/2");
        myGeocoder.then(function (res) {
            var coordinates = res.geoObjects.get(0).geometry.getCoordinates();
            var placeMarket = new ymaps.Placemark(coordinates, {/*
					balloonContentHeader: '<div class="title">Центральный офис</div>',
					balloonContentBody: '<div class="address">г. Минск, ул. Славинского 1,<br> корпус 2, офис 114 <a href="#">(показать на карте)</a></div><div class="links"><span>Телефоны:</span><ul><li><a href="tel:+375172680101">+375 (17) 268-01-01</a></li><li><a href="tel:+375172663093">+375 (17) 266-30-93</a></li><li><a href="tel:+375291950603">+375 (29) 195-06-03</a></li><li><a href="tel:+375297672211">+375 (29) 767-22-11</a></li></ul><span>Телефон/факс:</span><a href="tel:80172680101">8 (017) 268-01-01</a></div>'
                    /*balloonContent: 'г. Минск, Восток-2, улица Славинского, 1/2, офис 114'*/
                },
				{
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#image',
					// Своё изображение иконки метки.
					iconImageHref: 'images/mapicon.jpg',
					// Размеры метки.
					iconImageSize: [40, 40],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-5, -38]
				}
				);
            myMap.geoObjects
                .add(placeMarket);
			$('.map-point-info').hide();
			$('#office1').show();  placeMarket.events.add('click', function () {
                $('.map-point-info').hide();
				$('#office1').show("fade", 500);
            });
        });

    }

$('.map-point-info .close').on('click',function (){
	$('.map-point-info').hide("fade", 500);
});
	
	
	
$('.navbar').on('click',function (){
    if($(this).is('.active')){
        $(this).removeClass('active');
        $(this).parent().find('i.fa-times').hide();
        $(this).parent().find('i.fa-bars').show();
        $('.main-menu').hide("drop", { direction: "right" }, 500);
    } else {
        $('.main-menu').show("drop", { direction: "right" }, 500);
        $(this).addClass('active');
        $(this).parent().find('i.fa-bars').hide();
        $(this).parent().find('i.fa-times').show();
    }
});

/*$('.content-block-item.left').mouseenter(function(){
    $('.link-block.left').show("drop", { direction: "down" }, 500);
  });
$('.content-block-item.left').mouseout(function(){
	$('.link-block.left').hide("drop", { direction: "down" }, 500);
  });*/

/*$('.content-block-item.right').mouseenter(function(){
	$(this).parent().parent().parent().parent().css('background', 'linear-gradient(to right, #555 50%, #e31e24 50%)');
    $('.link-block.right').show();
  });
$('.content-block-item.right').mouseleave(function(){
	$(this).parent().parent().parent().parent().css('background', 'linear-gradient(to right, #555 50%, #f9f9f9 50%)');
	$('.link-block.right').hide();
  });

$('.content-block-item.left').hover(function() {
	$('.link-block.left').toggleClass('hidden');
});*/

/*$('.content-block-item.left').hover(function(){
$('.link-block.left').fadeIn();
}, function(){
	$('.link-block.left').fadeOut();
});*/

$('.content-block-item.left').mouseenter(function(){
	$('.link-block.left').show();
	$(this).parent().parent().parent().parent().css('background', 'linear-gradient(to right, #e31e24 50%, #f9f9f9 50%)');
  });
$('.content-block-item.left').mouseleave(function(){
	$('.link-block.left').hide();
	$(this).parent().parent().parent().parent().css('background', 'linear-gradient(to right, #555 50%, #f9f9f9 50%)');
  });
$('.content-block-item.right').mouseenter(function(){
	$('.link-block.right').show();
	$(this).parent().parent().parent().parent().css('background', 'linear-gradient(to right, #555 50%, #e31e24 50%)');;
  });
$('.content-block-item.right').mouseleave(function(){
	$('.link-block.right').hide();
	$(this).parent().parent().parent().parent().css('background', 'linear-gradient(to right, #555 50%, #f9f9f9 50%)');
  });