ymaps.ready(init);

function init() {
	var myMap = new ymaps.Map(
		"map",
		{
			center: [53.93, 27.49],
			zoom: 12,
		},
		{
			searchControlProvider: "yandex#search",
		}
	);

	myMap.behaviors.disable("scrollZoom");

	var myGeocoder = ymaps.geocode("Беларусь, Минск, улица Руссиянова, 4");
	myGeocoder.then(function (res) {
		var coordinates = res.geoObjects.get(0).geometry.getCoordinates();
		var placeMarket = new ymaps.Placemark(
			coordinates,
			{},
			{
				iconLayout: "default#image",
				iconImageHref: "images/mapicon.jpg",
				iconImageSize: [40, 40],
				iconImageOffset: [-5, -38],
			}
		);
		myMap.geoObjects.add(placeMarket);
		placeMarket.events.add("click", function () {
			$(".map-point-info").hide();
			$("#office2").show("fade", 500);
		});
	});

	var myGeocoder = ymaps.geocode("Беларусь, Минск, улица Шаранговича, 25");
	myGeocoder.then(function (res) {
		var coordinates = res.geoObjects.get(0).geometry.getCoordinates();
		var placeMarket = new ymaps.Placemark(
			coordinates,
			{},
			{
				iconLayout: "default#image",
				iconImageHref: "images/mapicon.jpg",
				iconImageSize: [40, 40],
				iconImageOffset: [-5, -38],
			}
		);
		myMap.geoObjects.add(placeMarket);
		placeMarket.events.add("click", function () {
			$(".map-point-info").hide();
			$("#office3").show("fade", 500);
		});
	});

	var myGeocoder = ymaps.geocode("Беларусь, Минск, улица Бурдейного, 6");
	myGeocoder.then(function (res) {
		var coordinates = res.geoObjects.get(0).geometry.getCoordinates();
		var placeMarket = new ymaps.Placemark(
			coordinates,
			{},
			{
				iconLayout: "default#image",
				iconImageHref: "images/mapicon.jpg",
				iconImageSize: [40, 40],
				iconImageOffset: [-5, -38],
			}
		);
		myMap.geoObjects.add(placeMarket);
		placeMarket.events.add("click", function () {
			$(".map-point-info").hide();
			$("#office4").show("fade", 500);
		});
	});

	var myGeocoder = ymaps.geocode(
		"Беларусь, Минск, Восток-2, улица Славинского, 1/2"
	);
	myGeocoder.then(function (res) {
		var coordinates = res.geoObjects.get(0).geometry.getCoordinates();
		var placeMarket = new ymaps.Placemark(
			coordinates,
			{},
			{
				iconLayout: "default#image",
				iconImageHref: "images/mapicon.jpg",
				iconImageSize: [40, 40],
				iconImageOffset: [-5, -38],
			}
		);
		myMap.geoObjects.add(placeMarket);
		$(".map-point-info").hide();
		$("#office1").show();
		placeMarket.events.add("click", function () {
			$(".map-point-info").hide();
			$("#office1").show("fade", 500);
		});
	});
}

$(".map-point-info .close").on("click", function () {
	$(".map-point-info").hide("fade", 500);
});

$(".navbar").on("click", function () {
	if ($(this).is(".active")) {
		$(this).removeClass("active");
		$(this).parent().find("i.fa-times").hide();
		$(this).parent().find("i.fa-bars").show();
		$(".main-menu").hide("drop", { direction: "right" }, 500);
	} else {
		$(".main-menu").show("drop", { direction: "right" }, 500);
		$(this).addClass("active");
		$(this).parent().find("i.fa-bars").hide();
		$(this).parent().find("i.fa-times").show();
	}
});

$(".content-block-item.left").mouseenter(function () {
	$(".link-block.left").show();
	$(this)
		.parent()
		.parent()
		.parent()
		.parent()
		.css("background", "linear-gradient(to right, #e31e24 50%, #f9f9f9 50%)");
});
$(".content-block-item.left").mouseleave(function () {
	$(".link-block.left").hide();
	$(this)
		.parent()
		.parent()
		.parent()
		.parent()
		.css("background", "linear-gradient(to right, #555 50%, #f9f9f9 50%)");
});
$(".content-block-item.right").mouseenter(function () {
	$(".link-block.right").show();
	$(this)
		.parent()
		.parent()
		.parent()
		.parent()
		.css("background", "linear-gradient(to right, #555 50%, #e31e24 50%)");
});
$(".content-block-item.right").mouseleave(function () {
	$(".link-block.right").hide();
	$(this)
		.parent()
		.parent()
		.parent()
		.parent()
		.css("background", "linear-gradient(to right, #555 50%, #f9f9f9 50%)");
});
