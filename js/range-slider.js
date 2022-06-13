//range
$("#max-label").addClass("fix");

$(function () {
	let minVal = 0;
	let maxVal = 409764;

	$("#range").slider({
		range: true,
		min: minVal,
		max: maxVal,
		values: [minVal, maxVal],
		slide: function (event, ui) {
			$("#min").val(ui.values[0]);
			$("#max").val(ui.values[1]);

			if ($("#max").val() > (maxVal / 100) * 96) {
				$("#max-label").addClass("fix");
			} else {
				$("#max-label").removeClass("fix");
			}

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

			setTimeout(delay, 5);
		},
	});

	$("#min, #max").keypress(function (event) {
		if (event.keyCode == 13 && parseInt($("#min").val()) < parseInt($("#max").val())) {
			$("#range").slider({ values: [$("#min").val(), $("#max").val()] });

			if ($("#max").val() > (maxVal / 100) * 96) {
				$("#max-label").addClass("fix");
			} else {
				$("#max-label").removeClass("fix");
			}

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
