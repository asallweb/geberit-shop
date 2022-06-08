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
						console.log(index);
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

			setTimeout(delay, 5);
		},
	});

	$("#min, #max").keypress(function (event) {
		if (event.keyCode == 13 && parseInt($("#min").val()) < parseInt($("#max").val())) {
			$("#range").slider({ values: [$("#min").val(), $("#max").val()] });

			$("#range")
				.find(".ui-slider-handle")
				.each(function (index) {
					var label = index == 0 ? "#min-label" : "#max-label"; //change selector
					console.log(index);
					//assign value
					$(label)
						.html($("#range").slider("values")[index])
						.position({
							my: "center bottom",
							at: "center top",
							of: $(this), // current span which is iterated..
							offset: "0, 10",
						});
				});
		}
	});
});
