//accordeon

$(".upper-block").click(function () {
	$(this)
		.next()
		.slideToggle(300, function () {});

	$(this).find($(".circle-plus")).toggleClass("opened");
});

//range

$(function () {
	$("#range").slider({
		range: true,
		step: 100,
		min: 0,
		max: 409764,
		values: ["0", "409764"],
		slide: function (event, ui) {
			$("#min").val(ui.values[0]);
			$("#max").val(ui.values[1]);
		},
	});

	$("#min, #max").keypress(function (event) {
		if (event.keyCode == 13 && $("#min").val() < $("#max").val()) {
			$("#range").slider({ values: [$("#min").val(), $("#max").val()] });
		}
	});
});

//checkbox tabs

$(".input-scroll-wrapper").each(function () {
	if ($(this).height() > 144) {
		$(this).parent().find(".more").addClass("button-visibility");
		$(this).parent().find(".input-scroll-wrapper").removeClass("show-scroll");
	}
});

$(".lower-block").each(function () {
	$(this).slideToggle(0, function () {});
});

$(".more").click(function () {
	$(this).parent().find(".input-scroll-wrapper ").toggleClass("show-scroll");
	if ($(this).html() == "Показать ещё") {
		$(this).html("Скрыть");
	} else {
		$(this).html("Показать ещё");
	}
});

// $("a").on("click", function (event) {
// 	event.preventDefault();
// 	var id = $(this).attr("href"),
// 		top = $(id).offset().top;
// 	$("body,html").animate({ scrollTop: top }, 500);
// });

//product detail slider

$(".product-head__main-photo").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: ".product-head__nav-slider",
});

$(".product-head__nav-slider").slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: ".product-head__main-photo",
	dots: false,
	centerMode: true,
	focusOnSelect: true,
	arrows: true,
	variableWidth: true,
	responsive: [
		{
			breakpoint: 1080,
			settings: {
				arrows: true,
				centerMode: false,
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 380,
			settings: {
				arrows: true,
				centerMode: true,
				slidesToShow: 3,
			},
		},
	],
});

//filters button

$(".filters-btn").click(function () {
	$(".products__side-panel").addClass("active");
	$(".body-filters-on").fadeIn(300, function () {});
	$("body").addClass("body-overflow");
});

$(".side-title .cross").click(function () {
	$(".products__side-panel").removeClass("active");
	$(".body-filters-on").fadeOut(300, function () {});
	$("body").removeClass("body-overflow");
});

$(".body-filters-on").click(function () {
	$(".products__side-panel").removeClass("active");
	$(".body-filters-on").fadeOut(300, function () {});
	$("body").removeClass("body-overflow");
});

//add-slider

$(".add__slider").slick({
	infinite: false,
	slidesToShow: 5,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	appendArrows: ".add__buttons-block .slider-arrows",
	prevArrow: "<button type='button' class='slick-prev pull-left'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
	nextArrow: "<button type='button' class='slick-next pull-right'><svg width='20' height='20'><use xlink:href='./images/icons/icons.svg#slick-arrow'></use></svg></button>",
	variableWidth: true,
	responsive: [
		{
			breakpoint: 1080,
			settings: {
				arrows: true,
				centerMode: false,
				slidesToShow: 3,
			},
		},
	],
});

//bonus slider

$(".bonus__slider").slick({
	infinite: false,
	slidesToShow: 4,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	responsive: [
		{
			breakpoint: 1250,
			settings: {
				arrows: true,
				centerMode: false,
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 768,
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

//geberit slider

$(".geberit-slider").slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	responsive: [
		{
			breakpoint: 1250,
			settings: {
				arrows: false,
				slidesToShow: 3,
				variableWidth: true,
			},
		},
	],
});

//count acc

$(".price-wrapper .count").click(function () {
	$(".count-acc").slideToggle(300, function () {});
	$(".count svg").toggleClass("active");
});

//sorting acc

$(".sort").click(function () {
	$(this).toggleClass("active");
	$(".sort-acc").slideToggle(300, function () {});
});

//tabs

$(".container").each(function () {
	let ths = $(this);
	ths.find(".tab-item").not(":first").hide();
	ths
		.find(".tab-buttons .scroll-wrapper button")
		.click(function () {
			ths.find(".tab-buttons .scroll-wrapper button").removeClass("active").eq($(this).index()).addClass("active");
			ths.find(".tab-item").hide().eq($(this).index()).fadeIn();

			$(".bonus__slider").slick("unslick");
			$(".bonus__slider").slick();
		})
		.eq(0)
		.addClass("active");
});

//message fixed btn

$(".message-btn").click(function () {
	$(".message-acc .item").toggleClass("hidden");
	$(".message-btn").toggleClass("active");
});

//counter basket

// let count = document.querySelector(".count-block .number");

// $(".plus").click(function () {
// 	count.innerHTML++;
// 	console.log(count);

// 	$(".minus").removeClass("unactive");
// });

// $(".minus").click(function () {
// 	if (count.innerHTML > 1) {
// 		count.innerHTML--;
// 	} else if (count.innerHTML <= 1) {
// 		$(".minus").addClass("unactive");
// 	}
// });

$(".plus").click(function () {
	$(this).closest(".count-block").find(".number").val() + 1;
	console.log($(this).closest(".count-block").find(".number").val());
});
