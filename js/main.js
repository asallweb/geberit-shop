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
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		appendArrows: ".bestseller .slider-arrows",
		prevArrow: "<button type='button' class='slick-prev pull-left'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
		nextArrow: "<button type='button' class='slick-next pull-right'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
		responsive: [
			{
				breakpoint: 1220,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 460,
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
		prevArrow: "<button type='button' class='slick-prev pull-left'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
		nextArrow: "<button type='button' class='slick-next pull-right'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
		fade: true,
		asNavFor: ".collections .slider-nav",
	});
	$(".collections .slider-nav").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: ".collections .slider-for",
		dots: false,
		arrows: false,
		centerMode: false,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 2,
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
	$(this).toggleClass("active");
	$(this)
		.find(".acc-list")
		.slideToggle(300, function () {});
});

//phones acc

$(".phones svg").click(function () {
	$(this).toggleClass("active");
	$(this)
		.parent()
		.find(".phones-list")
		.slideToggle(300, function () {});
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
			prevArrow: "<button type='button' class='slick-prev pull-left'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
			nextArrow: "<button type='button' class='slick-next pull-right'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
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
			prevArrow: "<button type='button' class='slick-prev pull-left'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
			nextArrow: "<button type='button' class='slick-next pull-right'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
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
