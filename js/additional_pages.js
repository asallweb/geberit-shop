//accordeon

$(".upper-block").click(function () {
	$(this)
		.next()
		.slideToggle(300, function () {});
	$(this).find($(".circle-plus")).toggleClass("opened");

	setTimeout(function () {
		$("#min-label")
			.html($("#range").slider("values", 0))
			.position({
				my: "center bottom",
				at: "center top",
				of: $("#range .ui-slider-handle:eq(0)"),
				offset: "0, 10",
			});

		$("#max-label")
			.html($("#range").slider("values", 1))
			.position({
				my: "center bottom",
				at: "center top",
				of: $("#range .ui-slider-handle:eq(1)"),
				offset: "0, 10",
			});
	}, 100);
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

//scroll links

$(".top-button").on("click", function (event) {
	event.preventDefault();
	var id = $(this).attr("href"),
		top = $(id).offset().top;
	$("body,html").animate({ scrollTop: top }, 500);
});

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
	slidesToShow: 6,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	responsive: [
		{
			breakpoint: 1700,
			settings: {
				slidesToShow: 5,
			},
		},
		{
			breakpoint: 1400,
			settings: {
				slidesToShow: 4,
			},
		},
		{
			breakpoint: 1080,
			settings: {
				arrows: true,
				centerMode: false,
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 768,
			settings: {
				variableWidth: true,
				arrows: false,
			},
		},
	],
});

//bonus slider

$(".bonus__slider").slick({
	infinite: false,
	slidesToShow: 5,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	responsive: [
		{
			breakpoint: 1700,
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

//geberit slider

$(".geberit-slider").slick({
	infinite: true,
	slidesToShow: 5,
	dots: false,
	arrows: true,
	responsive: [
		{
			breakpoint: 1600,
			settings: {
				slidesToShow: 4,
			},
		},
		{
			breakpoint: 1440,
			settings: {
				variableWidth: true,
				arrows: false,
			},
		},
	],
});

//count acc

$(".price-wrapper .count").click(function () {
	$(".count-acc").slideToggle(300, function () {});
	$(".count svg").toggleClass("active");
});

$(document).mouseup(function (e) {
	// событие клика по веб-документу
	if ($(".count svg").hasClass("active")) {
		var div = $(".count-acc"); // тут указываем ID элемента
		if (
			!div.parent().is(e.target) && // если клик был не по нашему блоку
			div.parent().has(e.target).length === 0
		) {
			// и не по его дочерним элементам
			div.slideUp(300, function () {}); // скрываем его
			$(".count svg").removeClass("active");
		}
	}
});

//sorting acc

$(".sort").click(function () {
	$(this).toggleClass("active");
	$(".sort-acc").slideToggle(300, function () {});
});

$(document).mouseup(function (e) {
	// событие клика по веб-документу
	if ($(".sort").hasClass("active")) {
		var div = $(".sort-acc"); // тут указываем ID элемента
		if (
			!div.parent().is(e.target) && // если клик был не по нашему блоку
			div.parent().has(e.target).length === 0
		) {
			// и не по его дочерним элементам
			div.slideUp(300, function () {}); // скрываем его
			$(".sort").removeClass("active");
		}
	}
});

//tabs

function tabsInit() {
	$(".container").each(function () {
		let ths = $(this);
		ths.find(".tab-item").not(":first").hide();
		ths
			.find(".tab-buttons .scroll-wrapper button")
			.click(function () {
				ths.find(".tab-buttons .scroll-wrapper button").removeClass("active").eq($(this).index()).addClass("active");
				ths.find(".tab-item").hide().eq($(this).index()).fadeIn();

				$(".description__lines-wrapper").each(function () {
					if ($(this).height() > 325) {
						$(this).parent().find(".show-more-char").addClass("button-visibility");
						$(this).parent().find(".description__lines-wrapper").removeClass("visible");
					}
				});

				$(".show-more-char").html("Все характеристики");

				$(".bonus__slider").slick("unslick");
				$(".bonus__slider").slick({
					infinite: false,
					slidesToShow: 5,
					slidesToScroll: 1,
					dots: false,
					arrows: true,
					responsive: [
						{
							breakpoint: 1700,
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

				$(".add__slider").slick("unslick");
				$(".add__slider").slick({
					infinite: false,
					slidesToShow: 6,
					slidesToScroll: 1,
					dots: false,
					arrows: true,
					responsive: [
						{
							breakpoint: 1700,
							settings: {
								slidesToShow: 5,
							},
						},
						{
							breakpoint: 1400,
							settings: {
								slidesToShow: 4,
							},
						},
						{
							breakpoint: 1080,
							settings: {
								arrows: true,
								centerMode: false,
								slidesToShow: 3,
							},
						},
						{
							breakpoint: 768,
							settings: {
								variableWidth: true,
								arrows: false,
							},
						},
					],
				});
			})
			.eq(0)
			.addClass("active");
	});
}

tabsInit();

$(".show__popup-btn").click(function () {
	tabsInit();
	console.log(1);
});

//message fixed btn

$(".message-btn").click(function () {
	$(".message-acc .item").toggleClass("hidden");
	$(".message-btn").toggleClass("active");
	$(".message-acc").toggleClass("upper-z-index");
});

//counter basket

$(".basket__item").each(function () {
	let amount = $(this).find(".number").val();

	$(this)
		.find(".plus")
		.click(function () {
			amount++;
			console.log(amount);
			$(this).parent().find(".number").val(amount);
			$(this).parent().find(".minus").removeClass("unactive");
		});

	$(this)
		.find(".minus")
		.click(function () {
			if (amount > 1) {
				amount--;
				console.log(amount);
				$(this).parent().find(".number").val(amount);
			}

			if (amount == 1) {
				$(this).parent().find(".minus").addClass("unactive");
			}
		});
});

// our shops acc

$(".header-top__menu-item_our-shops").click(function () {
	$(".shops").slideToggle(300, function () {});
});

$(document).mouseup(function (e) {
	// событие клика по веб-документу
	var div = $(".shops"); // тут указываем ID элемента
	if (
		!div.parent().find(".header-top__menu-item_our-shops").is(e.target) && // если клик был не по нашему блоку
		div.parent().find(".header-top__menu-item_our-shops").has(e.target).length === 0
	) {
		// и не по его дочерним элементам
		div.slideUp(300, function () {}); // скрываем его
	}
});

//katalog menu

$(".katalog-btn").click(function () {
	$(".katalog").toggleClass("active");
});

//dropdown search

$(".scroll-wrapper .content-wrapper").each(function () {
	if ($(this).height() > 120) {
		$(this).parent().find(".show-more").addClass("button-visibility");
		$(this).parent().find(".content-wrapper").removeClass("show-scroll");
	}
});

$(".search-dropdown .scroll-wrapper .show-more").click(function () {
	$(this).parent().find(".content-wrapper").toggleClass("show-scroll");
});

$(".show-more").click(function () {
	if ($(this).html() == "Смотреть ещё") {
		$(this).html("Скрыть");
	} else {
		$(this).html("Смотреть ещё");
	}
});

//search

$(document).ready(function () {
	$(".header-bottom__search-form").on("keyup", function () {
		var value = $(this).val().toLowerCase();

		$(".header-bottom__search-dropdown")
			.show()
			.filter(function () {
				return $(this).find("label").text().toLowerCase().indexOf(value) === -1;
			})
			.hide();

		if ($(this).parent().find(".header-bottom__search-dropdown").height() < 143) {
			$(this).parent().find(".more").removeClass("button-visibility");
		} else {
			$(this).parent().find(".more").addClass("button-visibility");
		}
	});
});

//dropdown characteristic

$(".description__lines-wrapper").each(function () {
	if ($(this).height() > 325) {
		$(this).parent().find(".show-more-char").addClass("button-visibility");
		$(this).parent().find(".description__lines-wrapper").removeClass("visible");
	}
});

$(".show-more-char").click(function () {
	$(this).parent().find(".description__lines-wrapper").toggleClass("visible");
});

$(".show-more-char").click(function () {
	if ($(this).html() == "Все характеристики") {
		$(this).html("Скрыть");
	} else {
		$(this).html("Все характеристики");
	}
});
