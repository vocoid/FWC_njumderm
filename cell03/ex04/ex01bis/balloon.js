$(function () {
	var colors = ["red", "green", "blue"];
	var size = 200;
	var color = 0;

	var draw = function () {
		$("#balloon").css({
			width: size + "px",
			height: size + "px",
			"background-color": colors[color],
		});
	};

	$("#balloon").on("click", function () {
		size += 10;
		color = (color + 1) % colors.length;

		if (size > 420) {
			size = 200;
			color = 0;
		}

		draw();
	});

	$("#balloon").on("mouseleave", function () {
		if (size <= 200) return;
		size = Math.max(200, size - 5);
		color = (color + colors.length - 1) % colors.length;
		draw();
	});

	draw();
});