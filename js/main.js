window.addEventListener("load", function () {
	setTimeout(function () {
		/* Animate.css initialize */
		$(".hasAnimation").each(function () {
			var animateName = $(this).data("animate");
			$(this)
				.addClass("hidden")
				.viewportChecker({
					classToRemove: "hidden",
					classToAdd: "visible animate__animated " + animateName,
					offset: 0,
				});
		});
	}, 200);
});
$(document).ready(function () {
	/* Phone validation */
	$(".wpcf7-validates-as-tel").mask("+7 (999) 999-9999");

	/* Popup initialize */
	popupInitialize();

	//additional slider

	$(".new__products .image").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
	});

	//additional slider

	$(".new__products .products").slick({
		dots: false,
		arrows: true,
		fade: true,
		autoplay: false,
		autoplaySpeed: 1000,
		asNavFor: ".new__products .image",
		speed: 500,
		cssEase: "linear",
		appendArrows: ".new__products .slider-arrows",
		prevArrow:
			"<button type='button' class='slick-prev pull-left'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
		nextArrow:
			"<button type='button' class='slick-next pull-right'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
		responsive: [
			{
				breakpoint: 1080,
				settings: {
					slidesToShow: 1,
					fade: false,
					slidesToScroll: 1,
				},
			},
		],
	});

	$(".item_product_list .images").slick({
		dots: true,
		arrows: false,
		fade: true,
		touchMove: false,
		autoplay: false,
		autoplaySpeed: 1000,
		speed: 500,
		cssEase: "linear",
	});

	$(".bestseller .slider").slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		appendArrows: ".bestseller .slider-arrows",
		prevArrow:
			"<button type='button' class='slick-prev pull-left'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
		nextArrow:
			"<button type='button' class='slick-next pull-right'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 1220,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 1080,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	});
	$(".collections .slider-for").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		appendArrows: ".collections .slider-arrows",
		prevArrow:
			"<button type='button' class='slick-prev pull-left'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
		nextArrow:
			"<button type='button' class='slick-next pull-right'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
		fade: true,
		asNavFor: ".collections .slider-nav",
	});
	$(".collections .slider-nav").slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: ".collections .slider-for",
		dots: false,
		arrows: false,
		centerMode: false,
		focusOnSelect: true,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					variableWidth: false,
				},
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 2,
					variableWidth: false,
				},
			},
		],
	});
	info__toggler();
});
$(window).resize(function () {});

function info__toggler() {
	$(".info__toggler .toggler .item").click(function () {
		let bannerid = $(this).data("bannerid");
		$(".info__toggler .toggler .item").removeClass("active");
		$(this).addClass("active");
		$(".info__toggler .body .item").hide();
		$(".info__toggler .body .item#bannerid-" + bannerid).show();
	});
}

//menu acc

$(".menu ul li.main").click(function () {
	// $(".menu ul li.main").removeClass("active");
	// $(".menu ul li.main")
	// 	.find(".acc-list")
	// 	.slideUp(300, function () {});

	$(this).toggleClass("active");
	$(this)
		.find(".acc-list")
		.slideToggle(300, function () {});
});

$(document).mouseup(function (e) {
	// событие клика по веб-документу

	$(".menu ul li.main").each(function () {
		if ($(this).hasClass("active")) {
			var div = $(this); // тут указываем ID элемента
			if (
				!div.is(e.target) && // если клик был не по нашему блоку
				div.has(e.target).length === 0
			) {
				// и не по его дочерним элементам
				div.find(".acc-list").slideUp(300, function () {}); // скрываем его
				$(".menu ul li.main").removeClass("active");
			}
		}
	});
});

//phones acc

$(".phones svg").click(function () {
	$(this).toggleClass("active");
	$(this)
		.parent()
		.find(".phones-list")
		.slideToggle(300, function () {});
});

$(document).mouseup(function (e) {
	// событие клика по веб-документу
	var div = $(".phones svg"); // тут указываем ID элемента
	if (
		!div.is(e.target) && // если клик был не по нашему блоку
		div.has(e.target).length === 0
	) {
		// и не по его дочерним элементам
		div
			.parent()
			.find(".phones-list")
			.slideUp(300, function () {}); // скрываем его
		div.removeClass("active");
	}
});

//big main slider reinit

$(window).resize(function () {
	if (window.innerWidth <= 1080) {
		$(".new__products .image").slick("unslick");
		$(".new__products .products").slick("unslick");

		$(".new__products .image").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
		});
		$(".new__products .products").slick({
			dots: false,
			arrows: true,
			fade: false,
			autoplay: false,
			autoplaySpeed: 1000,
			asNavFor: ".new__products .image",
			speed: 500,
			slidesToScroll: 1,
			cssEase: "linear",
			slidesToShow: 1,
			appendArrows: ".new__products .slider-arrows",
			prevArrow:
				"<button type='button' class='slick-prev pull-left'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
			nextArrow:
				"<button type='button' class='slick-next pull-right'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
		});
	} else if (window.innerWidth > 1080) {
		$(".new__products .image").slick("unslick");
		$(".new__products .products").slick("unslick");

		$(".new__products .image").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
		});
		$(".new__products .products").slick({
			dots: false,
			arrows: true,
			fade: true,
			autoplay: false,
			autoplaySpeed: 1000,
			asNavFor: ".new__products .image",
			speed: 500,
			cssEase: "linear",
			appendArrows: ".new__products .slider-arrows",
			prevArrow:
				"<button type='button' class='slick-prev pull-left'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
			nextArrow:
				"<button type='button' class='slick-next pull-right'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
		});
	}
});

//scroll links

$("a").on("click", function (event) {
	event.preventDefault();
	var id = $(this).attr("href"),
		top = $(id).offset().top;
	$("body,html").animate({ scrollTop: top }, 500);
});

//product card hover

$(".item_product_list").mouseenter(function () {
	$(".item_product_list").removeClass("unpper-z-index");
	$(this).addClass("unpper-z-index");
});

setTimeout(function () {
	$(".item_product_list-wrapper").height(
		$(".item_product_list-wrapper").height()
	);
}, 300);

//popular products hover

function popularProductsInit() {
	$(".popular__sections .media").each(function () {
		let ths = $(this);
		ths.find(".text").not(":first").hide();
		ths.find(".image").not(":first").hide();
		ths
			.find(".buttons .item")
			.mouseenter(function () {
				console.log("mouseenter");
				ths
					.find(".buttons .item")
					.removeClass("active")
					.eq($(this).index())
					.addClass("active");
				ths.parent().find(".text").hide().eq($(this).index()).show();
				ths.parent().find(".image").hide().eq($(this).index()).show();
			})
			.eq(0)
			.addClass("active");
	});
}

popularProductsInit();
