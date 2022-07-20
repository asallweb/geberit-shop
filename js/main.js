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

	$(".new-products-slider__images").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
	});

	//additional slider
	$(".new-products-slider__products").slick({
		dots: false,
		arrows: true,
		fade: true,
		autoplay: false,
		autoplaySpeed: 1000,
		asNavFor: ".new-products-slider__images",
		speed: 500,
		cssEase: "linear",
		appendArrows: ".new-products-slider .slider-arrows",
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

	$(".bestseller-section__slider").slick({
		infinite: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		appendArrows: ".bestseller-section__head .slider-arrows",
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

	$(".collections-section__slider-list").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		appendArrows: ".collections-section__arrows",
		prevArrow: "<button type='button' class='slick-prev pull-left'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
		nextArrow: "<button type='button' class='slick-next pull-right'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
		fade: true,
		asNavFor: ".collections-section__slider-nav",
	});
	$(".collections-section__slider-nav").slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: ".collections-section__slider-list",
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
	popularCategoriesToggler();
	productCardHover();
	introSectionArrow();
	headerPhonesToggle();
	headerMenuToggle();
	$(".product-preview__images").HvrSlider();
});

//menu acc




//big main slider reinit
$(window).resize(function () {
	if (window.innerWidth <= 1080) {
		$(".new-products-slider__images").slick("unslick");
		$(".new-products-slider__products").slick("unslick");

		$(".new-products-slider__images").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
		});

		$(".new-products-slider__products").slick({
			dots: false,
			arrows: true,
			fade: false,
			autoplay: false,
			autoplaySpeed: 1000,
			asNavFor: ".new-products-slider__images",
			speed: 500,
			slidesToScroll: 1,
			cssEase: "linear",
			slidesToShow: 1,
			appendArrows: ".new-products-slider .slider-arrows",
			prevArrow: "<button type='button' class='slick-prev pull-left'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
			nextArrow: "<button type='button' class='slick-next pull-right'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
		});

	} else if (window.innerWidth > 1080) {

		$(".new-products-slider__images").slick("unslick");
		$(".new-products-slider__products").slick("unslick");

		$(".new-products-slider__images").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
		});

		$(".new-products-slider__products").slick({
			dots: false,
			arrows: true,
			fade: true,
			autoplay: false,
			autoplaySpeed: 1000,
			asNavFor: ".new-products-slider__images",
			speed: 500,
			cssEase: "linear",
			appendArrows: ".new-products-slider .slider-arrows",
			prevArrow: "<button type='button' class='slick-prev pull-left'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
			nextArrow: "<button type='button' class='slick-next pull-right'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
		});
	}
});


setTimeout(function () {
	$(".new-products-slider__products-wrapper").height($(".new-products-slider__products-wrapper").height());
}, 300);


function popularCategoriesToggler() {
		let ths = $(".popular-categories__body-media");
		let btn = $(".popular-categories__buttons-item");

		ths.find(".popular-categories__media-text").not(":first").hide();
		ths.find(".popular-categories__media-image").not(":first").hide();
		btn
			.mouseenter(function () {
				$(".popular-categories__buttons-item").removeClass("active").eq($(this).index()).addClass("active");
				$(".popular-categories__media-text").hide().eq($(this).index()).show();
				$(".popular-categories__media-image").hide().eq($(this).index()).show();
			});
}

function info__toggler() {
	// let 
	$(".info-section__button").mouseenter(function () {
		let bannerid = $(this).data("bannerid");
		$(".info-section__button").removeClass("info-section__button_active");
		$(this).addClass("info-section__button_active");
		$(".info-section__item").hide();
		$(".info-section__item#bannerid-" + bannerid).show();
	});
}

function productCardHover(){
	$(".product-preview").mouseenter(function () {
		$(".product-preview").removeClass("unpper-z-index");
		$(this).addClass("unpper-z-index");
	});
}

function introSectionArrow(){
	$(".intro-section__arrow").on("click", function (event) {
		event.preventDefault();
		var id = $(this).attr("href"),
			top = $(id).offset().top;
		$("body,html").animate({ scrollTop: top }, 500);
	});
}

function headerPhonesToggle(){
	$(".phones svg").click(function () {
		$(this).toggleClass("active");
		$(this)
			.parent()
			.find(".phones-list")
			.slideToggle(300, function () {});
	});
}

function headerMenuToggle(){
	let menuMain = $(".menu ul li.main");
	menuMain.click(function () {
		$(this).toggleClass("active");
		$(this)
			.find(".acc-list")
			.slideToggle(300, function () {});
	});
	$(document).mouseup(function (e) {
		// событие клика по веб-документу
		menuMain.each(function () {
			if ($(this).hasClass("active")) {
				var div = $(this); // тут указываем ID элемента
				if (
					!div.is(e.target) && // если клик был не по нашему блоку
					div.has(e.target).length === 0
				) {
					// и не по его дочерним элементам
					div.find(".acc-list").slideUp(300, function () {}); // скрываем его
					menuMain.removeClass("active");
				}
			}
		});
	});
}
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


