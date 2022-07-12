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

	$(".page-block_new-products__image-big").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
	});

	//additional slider
	$(".page-block_new-products__products").slick({
		dots: false,
		arrows: true,
		fade: true,
		autoplay: false,
		autoplaySpeed: 1000,
		asNavFor: ".page-block_new-products__image-big",
		speed: 500,
		cssEase: "linear",
		appendArrows: ".page-block_new-products .slider-arrows",
		prevArrow: "<button type='button' class='slick-prev pull-left'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
		nextArrow: "<button type='button' class='slick-next pull-right'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
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

	$(".page-block_bestseller__slider").slick({
		infinite: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		appendArrows: ".page-block_bestseller__slider .slider-arrows",
		prevArrow: "<button type='button' class='slick-prev pull-left'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
		nextArrow: "<button type='button' class='slick-next pull-right'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					arrows: true,
					centerMode: false,
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 1400,
				settings: {
					arrows: true,
					centerMode: false,
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 992,
				settings: {
					arrows: true,
					centerMode: false,
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 576,
				settings: {
					arrows: true,
					centerMode: false,
					slidesToShow: 1,
				},
			},
		],
	});

	$(".page-block_collections .slider-for").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		appendArrows: ".page-block_collections .slider-arrows",
		prevArrow: "<button type='button' class='slick-prev pull-left'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
		nextArrow: "<button type='button' class='slick-next pull-right'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
		fade: true,
		asNavFor: ".page-block_collections .slider-nav",
	});
	$(".page-block_collections .slider-nav").slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: ".page-block_collections .slider-for",
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

function info__toggler() {
	$(".page-block_info-toggler .toggler .item").mouseenter(function () {
		let bannerid = $(this).data("bannerid");
		$(".page-block_info-toggler .toggler .item").removeClass("active");
		$(this).addClass("active");
		$(".page-block_info-toggler .body .item").hide();
		$(".page-block_info-toggler .body .item#bannerid-" + bannerid).show();
	});
}

//menu acc

$(".menu ul li.main").click(function () {
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
		$(".page-block_new-products__image-big").slick("unslick");
		$(".page-block_new-products__products").slick("unslick");

		$(".page-block_new-products__image-big").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
		});

		$(".page-block_new-products__products").slick({
			dots: false,
			arrows: true,
			fade: false,
			autoplay: false,
			autoplaySpeed: 1000,
			asNavFor: ".page-block_new-products__image-big",
			speed: 500,
			slidesToScroll: 1,
			cssEase: "linear",
			slidesToShow: 1,
			appendArrows: ".page-block_new-products .slider-arrows",
			prevArrow: "<button type='button' class='slick-prev pull-left'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
			nextArrow: "<button type='button' class='slick-next pull-right'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
		});

	} else if (window.innerWidth > 1080) {

		$(".page-block_new-products__image-big").slick("unslick");
		$(".page-block_new-products__products").slick("unslick");

		$(".page-block_new-products__image-big").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
		});

		$(".page-block_new-products__products").slick({
			dots: false,
			arrows: true,
			fade: true,
			autoplay: false,
			autoplaySpeed: 1000,
			asNavFor: ".page-block_new-products__image-big",
			speed: 500,
			cssEase: "linear",
			appendArrows: ".page-block_new-products .slider-arrows",
			prevArrow: "<button type='button' class='slick-prev pull-left'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
			nextArrow: "<button type='button' class='slick-next pull-right'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
		});
	}
});

//scroll links

$(".anchor").on("click", function (event) {
	event.preventDefault();
	var id = $(this).attr("href"),
		top = $(id).offset().top;
	$("body,html").animate({ scrollTop: top }, 500);
});

$(".arrow-bottom").on("click", function (event) {
	event.preventDefault();
	var id = $(this).attr("href"),
		top = $(id).offset().top;
	$("body,html").animate({ scrollTop: top }, 500);
});

//product card hover
$(".product-preview").mouseenter(function () {
	$(".product-preview").removeClass("unpper-z-index");
	$(this).addClass("unpper-z-index");
});

setTimeout(function () {
	$(".product-preview-wrapper").height($(".product-preview-wrapper").height());
}, 300);

//popular products hover

function popularProductsInit() {
	$(".page-block_popular-sections__body .media").each(function () {
		let ths = $(this);
		ths.find(".text").not(":first").hide();
		ths.find(".image").not(":first").hide();
		ths
			.find(".buttons .item")
			.mouseenter(function () {
				console.log("mouseenter");
				ths.find(".buttons .item").removeClass("active").eq($(this).index()).addClass("active");
				ths.parent().find(".text").hide().eq($(this).index()).show();
				ths.parent().find(".image").hide().eq($(this).index()).show();
			})
			.eq(0)
			.addClass("active");
	});
}

popularProductsInit();

//hover slider

(function ($) {
	$.fn.HvrSlider = function () {
		return this.each(function () {
			var el = $(this);
			if (el.find("img").length > 1) {
				var hvr = $("<div>", {
					class: "hvr",
					append: [
						$("<div>", {
							class: "hvr__images",
							append: $("<div>", {
								class: "hvr__sectors",
							}),
						}),
						$("<div>", {
							class: "hvr__dots",
						}),
					],
					insertAfter: el,
					prepend: el,
				});
				var hvrImages = $(".hvr__images", hvr);
				var hvrImage = $("img", hvr);
				var hvrSectors = $(".hvr__sectors", hvr);
				var hvrDots = $(".hvr__dots", hvr);
				el.prependTo(hvrImages);
				hvrImage.each(function () {
					hvrSectors.prepend('<div class="hvr__sector"></div>');
					hvrDots.append('<div class="hvr__dot"></div>');
				});
				$(".hvr__dot:first", hvrDots).addClass("hvr__dot--active");
				var setActiveEl = function (el) {
					hvrImage.hide().eq(el.index()).show();
					$(".hvr__dot", hvrDots).removeClass("hvr__dot--active").eq(el.index()).addClass("hvr__dot--active");
				};
				$(".hvr__sector", hvrSectors).hover(function () {
					setActiveEl($(this));
				});
				setActiveEl($(".hvr__sector:first"));
				hvrSectors.on("touchmove", function (e) {
					var position = e.originalEvent.changedTouches[0];
					var target = document.elementFromPoint(position.clientX, position.clientY);
					if ($(target).is(".hvr__sector")) {
						setActiveEl($(target));
					}
				});
			}
		});
	};
})(jQuery);

$(".product-preview .images").HvrSlider();
