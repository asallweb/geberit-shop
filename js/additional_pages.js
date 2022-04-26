//accordeon

$(".upper-block").click(function () {
	$(this)
		.next()
		.slideToggle(300, function () {});

	$(this).find($(".circle-plus")).toggleClass("opened");

	setTimeout(function () {
		$("#min-label")
			.html("$" + $("#range").slider("values", 0))
			.position({
				my: "center bottom",
				at: "center top",
				of: $("#range .ui-slider-handle:eq(0)"),
				offset: "0, 10",
			});

		$("#max-label")
			.html("$" + $("#range").slider("values", 1))
			.position({
				my: "center bottom",
				at: "center top",
				of: $("#range .ui-slider-handle:eq(1)"),
				offset: "0, 10",
			});
	}, 100);
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

			var delay = function () {
				//loop through the span...
				$("#range")
					.find(".ui-slider-handle")
					.each(function (index) {
						var label = index == 0 ? "#min-label" : "#max-label"; //change selector
						//assign value
						$(label)
							.html(ui.values[index])
							.position({
								my: "center bottom",
								at: "center top",
								of: $(this), // current span which is iterated..
								offset: "0, 10",
							});
					});
			};

			// wait for the ui.handle to set its position
			setTimeout(delay, 5);
		},
	});

	$("#min, #max").keypress(function (event) {
		if (event.keyCode == 13 && parseInt($("#min").val()) < parseInt($("#max").val())) {
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
			$(".item_product_list .images").slick("unslick");
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
